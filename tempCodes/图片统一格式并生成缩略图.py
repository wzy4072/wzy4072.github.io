#!/usr/bin/env python3
"""
Image to Dual Gallery Converter
将所有图片转换为两个图片库：
- gallery/     : 高清JPG图片（<2MB，保留清晰度）
- galleryZip/  : 缩略图（<100KB，500x500方形）
所有图片统一命名: gallery-1.jpeg, gallery-2.jpeg, ...
"""

import os
import sys
import io
from pathlib import Path
from typing import Optional, List, Tuple
from concurrent.futures import ThreadPoolExecutor, as_completed
import threading

try:
    from PIL import Image
except ImportError:
    print("错误: 需要安装Pillow库")
    print("请运行: pip install Pillow")
    sys.exit(1)


# 线程锁用于打印输出
print_lock = threading.Lock()


def safe_print(message: str):
    """线程安全的打印"""
    with print_lock:
        print(message)


def get_image_size(img: Image.Image, format: str = "JPEG", **kwargs) -> int:
    """获取图片保存后的大小（字节）"""
    buffer = io.BytesIO()
    img.save(buffer, format=format, **kwargs)
    return buffer.tell()


def compress_to_target_size(
    img: Image.Image,
    max_size_bytes: int,
    format: str = "JPEG",
    initial_quality: int = 95,
    min_quality: int = 30,
    target_size: Optional[tuple] = None,
) -> Tuple[Image.Image, int, dict]:
    """
    压缩图片到目标大小以内，优先保持清晰度
    
    Args:
        img: PIL图片对象
        max_size_bytes: 最大大小（字节）
        format: 图片格式
        initial_quality: 初始质量
        min_quality: 最低质量（低于此值则降低分辨率）
        target_size: 目标尺寸 (width, height)，如果指定则先缩放到该尺寸
    
    Returns:
        (压缩后的图片, 最终文件大小, 使用的参数)
    """
    # 如果是RGBA，转换为RGB（JPEG不支持透明度）
    if img.mode in ("RGBA", "LA", "P"):
        img = img.convert("RGB")
    elif img.mode != "RGB":
        img = img.convert("RGB")
    
    # 如果指定了目标尺寸，先缩放
    if target_size:
        img = img.resize(target_size, Image.Resampling.LANCZOS)
    
    original_size = get_image_size(img, format, quality=initial_quality, optimize=True)
    
    # 如果原图已经符合要求，直接返回
    if original_size <= max_size_bytes:
        return img, original_size, {"quality": initial_quality, "optimize": True}
    
    # 策略1: 逐步降低质量
    for quality in range(initial_quality, min_quality - 1, -5):
        save_kwargs = {"quality": quality, "optimize": True, "progressive": False}
        size = get_image_size(img, format, **save_kwargs)
        if size <= max_size_bytes:
            return img, size, save_kwargs
    
    # 策略2: 降低分辨率（保持宽高比）
    current_img = img
    scale = 0.95
    
    while scale > 0.3:
        new_width = int(img.width * scale)
        new_height = int(img.height * scale)
        resized_img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # 尝试用不同质量
        for quality in [95, 90, 85, 80, 75, 70, 65, 60]:
            save_kwargs = {"quality": quality, "optimize": True, "progressive": False}
            size = get_image_size(resized_img, format, **save_kwargs)
            if size <= max_size_bytes:
                return resized_img, size, save_kwargs
        
        scale -= 0.05
    
    # 最后手段：使用最低质量
    save_kwargs = {"quality": min_quality, "optimize": True, "progressive": False}
    size = get_image_size(current_img, format, **save_kwargs)
    return current_img, size, save_kwargs


def process_single_image(
    img_path: Path,
    output_dir: Path,
    index: int,
    max_size_high_bytes: int,
    max_size_thumb_bytes: int,
    thumb_size: tuple = (500, 500),
) -> dict:
    """
    处理单个图片
    
    Args:
        img_path: 图片路径
        output_dir: 输出根目录
        index: 全局索引
        max_size_high_bytes: 高清图最大大小（字节）
        max_size_thumb_bytes: 缩略图最大大小（字节）
        thumb_size: 缩略图尺寸 (width, height)
    
    Returns:
        处理结果字典
    """
    gallery_dir = output_dir / "gallery"
    gallery_zip_dir = output_dir / "galleryZip"
    
    result = {
        "file": img_path.name,
        "global_page": index,
        "success": False,
        "high_size": 0,
        "thumb_size": 0,
        "error": None
    }
    
    try:
        # 打开原始图片
        img = Image.open(img_path)
        
        # === 生成高清图片 ===
        # 压缩高清图到目标大小（优先保证清晰度）
        img_high_final, size_high, params_high = compress_to_target_size(
            img.copy(),
            max_size_high_bytes,
            format="JPEG",
            initial_quality=95,
            min_quality=50,
        )
        
        # 保存高清图
        high_filename = f"gallery-{index}.jpeg"
        high_path = gallery_dir / high_filename
        img_high_final.save(high_path, format="JPEG", **params_high)
        result["high_size"] = size_high
        result["high_path"] = str(high_path)
        
        size_high_mb = size_high / 1024 / 1024
        safe_print(f"   📸 #{index} 高清: {img_high_final.width}x{img_high_final.height}px, "
                   f"{size_high_mb:.2f}MB, 质量:{params_high.get('quality', 'N/A')}")
        
        # === 生成缩略图（500x500方形） ===
        # 先缩放到500x500（保持比例，然后中心裁剪）
        img_thumb = img.copy()
        if img_thumb.mode in ("RGBA", "LA", "P"):
            img_thumb = img_thumb.convert("RGB")
        elif img_thumb.mode != "RGB":
            img_thumb = img_thumb.convert("RGB")
        
        # 缩放到500x500，保持比例
        img_thumb.thumbnail(thumb_size, Image.Resampling.LANCZOS)
        
        # 创建方形画布并居中粘贴
        thumb_canvas = Image.new("RGB", thumb_size, (255, 255, 255))
        x_offset = (thumb_size[0] - img_thumb.width) // 2
        y_offset = (thumb_size[1] - img_thumb.height) // 2
        thumb_canvas.paste(img_thumb, (x_offset, y_offset))
        
        # 压缩缩略图到目标大小（<100KB）
        img_thumb_final, size_thumb, params_thumb = compress_to_target_size(
            thumb_canvas,
            max_size_thumb_bytes,
            format="JPEG",
            initial_quality=85,
            min_quality=30,
        )
        
        # 保存缩略图（使用相同文件名）
        thumb_filename = f"gallery-{index}.jpeg"
        thumb_path = gallery_zip_dir / thumb_filename
        img_thumb_final.save(thumb_path, format="JPEG", **params_thumb)
        result["thumb_size"] = size_thumb
        result["thumb_path"] = str(thumb_path)
        
        size_thumb_kb = size_thumb / 1024
        safe_print(f"   🖼️  #{index} 缩略: {img_thumb_final.width}x{img_thumb_final.height}px, "
                   f"{size_thumb_kb:.1f}KB, 质量:{params_thumb.get('quality', 'N/A')}")
        
        result["success"] = True
        
    except Exception as e:
        safe_print(f"   ❌ 处理 {img_path.name} 时出错: {e}")
        result["error"] = str(e)
    
    return result


def process_all_images_to_gallery(
    output_dir: str = ".",
    max_size_high_mb: float = 2.0,
    max_size_thumb_kb: float = 100,
    thumb_size: tuple = (500, 500),
    max_workers: int = 4,
) -> dict:
    """
    处理指定目录下所有图片
    
    Args:
        output_dir: 输出根目录
        max_size_high_mb: 高清图最大大小（MB）
        max_size_thumb_kb: 缩略图最大大小（KB）
        thumb_size: 缩略图尺寸 (width, height)
        max_workers: 并行处理线程数
    
    Returns:
        处理结果
    """
    current_dir = Path.cwd()
    
    # 支持的图片格式
    image_extensions = {'.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.tif', '.webp', '.heic', '.heif'}
    image_files = []
    
    for ext in image_extensions:
        image_files.extend(current_dir.glob(f"*{ext}"))
        image_files.extend(current_dir.glob(f"*{ext.upper()}"))
    
    # 去重
    image_files = list(set(image_files))
    
    if not image_files:
        print(f"❌ 当前目录 '{current_dir}' 中没有找到图片文件")
        print(f"   支持的格式: {', '.join(image_extensions)}")
        return {}
    
    # 创建输出目录
    gallery_dir = Path(output_dir) / "gallery"
    gallery_zip_dir = Path(output_dir) / "galleryZip"
    gallery_dir.mkdir(parents=True, exist_ok=True)
    gallery_zip_dir.mkdir(parents=True, exist_ok=True)
    
    # 转换单位
    max_size_high_bytes = int(max_size_high_mb * 1024 * 1024)
    max_size_thumb_bytes = int(max_size_thumb_kb * 1024)
    
    print(f"\n📁 找到 {len(image_files)} 个图片文件")
    print(f"📸 高清图: 最大 {max_size_high_mb}MB, JPG格式")
    print(f"🖼️  缩略图: {thumb_size[0]}x{thumb_size[1]}px, 最大 {max_size_thumb_kb}KB")
    print(f"📂 输出目录: {output_dir}")
    print(f"⚡ 并行线程: {max_workers}")
    print("=" * 60)
    
    results = {
        "total_images": len(image_files),
        "success_count": 0,
        "fail_count": 0,
        "high_dir": str(gallery_dir),
        "thumb_dir": str(gallery_zip_dir),
        "files": []
    }
    
    # 按文件名排序，确保顺序一致
    image_files.sort(key=lambda x: x.name)
    
    # 使用线程池并行处理
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {}
        
        for idx, img_path in enumerate(image_files, 1):
            print(f"\n📄 [{idx}/{len(image_files)}] 处理: {img_path.name}")
            future = executor.submit(
                process_single_image,
                img_path,
                Path(output_dir),
                idx,
                max_size_high_bytes,
                max_size_thumb_bytes,
                thumb_size
            )
            futures[future] = (img_path, idx)
        
        # 收集结果
        for future in as_completed(futures):
            img_path, idx = futures[future]
            try:
                result = future.result()
                results["files"].append(result)
                if result["success"]:
                    results["success_count"] += 1
                else:
                    results["fail_count"] += 1
            except Exception as e:
                print(f"   ❌ 处理 {img_path.name} 时发生异常: {e}")
                results["fail_count"] += 1
                results["files"].append({
                    "file": img_path.name,
                    "global_page": idx,
                    "success": False,
                    "error": str(e)
                })
    
    print("\n" + "=" * 60)
    print(f"✅ 全部完成！")
    print(f"   📄 处理图片: {results['total_images']} 个")
    print(f"   ✅ 成功: {results['success_count']} 个")
    print(f"   ❌ 失败: {results['fail_count']} 个")
    print(f"   📸 高清图目录: {gallery_dir}")
    print(f"   🖼️  缩略图目录: {gallery_zip_dir}")
    
    return results


def main():
    """命令行入口"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="将所有图片转换为双图片库：高清JPG图(gallery/) + 缩略图(galleryZip/)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 基本用法 - 处理当前目录所有图片
  python image_converter.py
  
  # 指定输出目录
  python image_converter.py -o ./my_images
  
  # 调整高清图大小限制（默认2MB）
  python image_converter.py --max-high 1.5
  
  # 调整缩略图大小（默认100KB）
  python image_converter.py --max-thumb 80
  
  # 调整缩略图尺寸（默认500x500）
  python image_converter.py --thumb-size 400 400
  
  # 调整并行线程数（默认4）
  python image_converter.py --workers 8
        """
    )
    
    parser.add_argument(
        "-o", "--output",
        dest="output_dir",
        default=".",
        help="输出根目录（默认：当前目录）"
    )
    parser.add_argument(
        "--max-high",
        type=float,
        default=2.0,
        help="高清图最大大小（MB，默认：2.0）"
    )
    parser.add_argument(
        "--max-thumb",
        type=float,
        default=100,
        help="缩略图最大大小（KB，默认：100）"
    )
    parser.add_argument(
        "--thumb-size",
        type=int,
        nargs=2,
        default=[500, 500],
        metavar=("WIDTH", "HEIGHT"),
        help="缩略图尺寸（默认：500 500）"
    )
    parser.add_argument(
        "--workers",
        type=int,
        default=4,
        help="并行处理线程数（默认：4）"
    )
    
    args = parser.parse_args()
    
    try:
        process_all_images_to_gallery(
            output_dir=args.output_dir,
            max_size_high_mb=args.max_high,
            max_size_thumb_kb=args.max_thumb,
            thumb_size=tuple(args.thumb_size),
            max_workers=args.workers,
        )
    
    except KeyboardInterrupt:
        print("\n\n⏹️  用户中断")
        sys.exit(0)
    except Exception as e:
        print(f"❌ 错误: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()