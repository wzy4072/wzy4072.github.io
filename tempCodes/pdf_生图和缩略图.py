#!/usr/bin/env python3
"""
PDF to Dual Image Gallery Converter
将所有PDF的每一页转换为两个图片库：
- gallery/     : 高清图片（<3MB，保留清晰度）
- galleryZip/  : 缩略图（<100KB，快速预览）
所有图片统一命名: gallery-1.jpeg, gallery-2.jpeg, ...
"""

import os
import sys
import io
from pathlib import Path
from typing import Optional, List, Tuple

try:
    import fitz  # PyMuPDF
except ImportError:
    print("错误: 需要安装PyMuPDF库")
    print("请运行: pip install PyMuPDF")
    sys.exit(1)

try:
    from PIL import Image
except ImportError:
    print("错误: 需要安装Pillow库")
    print("请运行: pip install Pillow")
    sys.exit(1)


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
) -> Tuple[Image.Image, int, dict]:
    """
    压缩图片到目标大小以内，优先保持清晰度
    
    Args:
        img: PIL图片对象
        max_size_bytes: 最大大小（字节）
        format: 图片格式
        initial_quality: 初始质量
        min_quality: 最低质量（低于此值则降低分辨率）
    
    Returns:
        (压缩后的图片, 最终文件大小, 使用的参数)
    """
    # 如果是RGBA，转换为RGB（JPEG不支持透明度）
    if img.mode in ("RGBA", "LA"):
        img = img.convert("RGB")
    
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
        
        # 尝试用最高质量
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


def process_all_pdfs_to_gallery(
    output_dir: str = ".",
    dpi_high: int = 200,
    dpi_thumb: int = 72,
    max_size_high_mb: float = 3.0,
    max_size_thumb_kb: float = 100,
) -> dict:
    """
    处理当前目录下所有PDF，所有图片统一放到同一个gallery目录
    
    Args:
        output_dir: 输出根目录
        dpi_high: 高清图片DPI
        dpi_thumb: 缩略图DPI
        max_size_high_mb: 高清图最大大小（MB）
        max_size_thumb_kb: 缩略图最大大小（KB）
    
    Returns:
        处理结果
    """
    current_dir = Path.cwd()
    pdf_files = list(current_dir.glob("*.pdf"))
    
    if not pdf_files:
        print(f"❌ 当前目录 '{current_dir}' 中没有找到PDF文件")
        return {}
    
    # 创建输出目录
    gallery_dir = Path(output_dir) / "gallery"
    gallery_zip_dir = Path(output_dir) / "galleryZip"
    gallery_dir.mkdir(parents=True, exist_ok=True)
    gallery_zip_dir.mkdir(parents=True, exist_ok=True)
    
    # 转换单位
    max_size_high_bytes = int(max_size_high_mb * 1024 * 1024)
    max_size_thumb_bytes = int(max_size_thumb_kb * 1024)
    
    print(f"\n📁 找到 {len(pdf_files)} 个PDF文件")
    print(f"📸 高清图: {dpi_high} DPI, 最大 {max_size_high_mb}MB")
    print(f"🖼️  缩略图: {dpi_thumb} DPI, 最大 {max_size_thumb_kb}KB")
    print(f"📂 输出目录: {output_dir}")
    print("=" * 60)
    
    page_counter = 0
    results = {
        "total_pdfs": len(pdf_files),
        "total_pages": 0,
        "high_dir": str(gallery_dir),
        "thumb_dir": str(gallery_zip_dir),
        "files": []
    }
    
    for pdf_file in pdf_files:
        print(f"\n📄 处理PDF: {pdf_file.name}")
        
        try:
            doc = fitz.open(pdf_file)
            total_pages = len(doc)
            print(f"   页数: {total_pages}")
            
            for page_num in range(total_pages):
                page = doc[page_num]
                page_counter += 1
                current_page = page_counter
                
                print(f"\n   📄 第 {page_num + 1}/{total_pages} 页 (全局第 {current_page} 页)")
                
                # === 生成高清图片 ===
                matrix_high = fitz.Matrix(dpi_high / 72, dpi_high / 72)
                pix_high = page.get_pixmap(
                    matrix=matrix_high,
                    dpi=dpi_high,
                    colorspace=fitz.csRGB,
                    alpha=False,
                )
                
                img_data_high = pix_high.tobytes("ppm")
                img_high = Image.open(io.BytesIO(img_data_high))
                
                # 压缩高清图到目标大小（优先保证清晰度）
                img_high_final, size_high, params_high = compress_to_target_size(
                    img_high,
                    max_size_high_bytes,
                    format="JPEG",
                    initial_quality=95,
                    min_quality=50,
                )
                
                # 保存高清图
                high_filename = f"gallery-{current_page}.jpeg"
                high_path = gallery_dir / high_filename
                img_high_final.save(high_path, format="JPEG", **params_high)
                
                size_high_mb = size_high / 1024 / 1024
                print(f"      📸 高清: {img_high_final.width}x{img_high_final.height}px, "
                      f"{size_high_mb:.2f}MB, 质量:{params_high.get('quality', 'N/A')}")
                
                # === 生成缩略图 ===
                matrix_thumb = fitz.Matrix(dpi_thumb / 72, dpi_thumb / 72)
                pix_thumb = page.get_pixmap(
                    matrix=matrix_thumb,
                    dpi=dpi_thumb,
                    colorspace=fitz.csRGB,
                    alpha=False,
                )
                
                img_data_thumb = pix_thumb.tobytes("ppm")
                img_thumb = Image.open(io.BytesIO(img_data_thumb))
                
                # 限制缩略图最大尺寸（提高压缩效率）
                max_thumb_dimension = 800
                if img_thumb.width > max_thumb_dimension or img_thumb.height > max_thumb_dimension:
                    ratio = min(max_thumb_dimension / img_thumb.width, 
                               max_thumb_dimension / img_thumb.height)
                    new_w = int(img_thumb.width * ratio)
                    new_h = int(img_thumb.height * ratio)
                    img_thumb = img_thumb.resize((new_w, new_h), Image.Resampling.LANCZOS)
                
                # 压缩缩略图到目标大小（<100KB）
                img_thumb_final, size_thumb, params_thumb = compress_to_target_size(
                    img_thumb,
                    max_size_thumb_bytes,
                    format="JPEG",
                    initial_quality=85,
                    min_quality=30,
                )
                
                # 保存缩略图（使用相同文件名）
                thumb_filename = f"gallery-{current_page}.jpeg"
                thumb_path = gallery_zip_dir / thumb_filename
                img_thumb_final.save(thumb_path, format="JPEG", **params_thumb)
                
                size_thumb_kb = size_thumb / 1024
                print(f"      🖼️  缩略: {img_thumb_final.width}x{img_thumb_final.height}px, "
                      f"{size_thumb_kb:.1f}KB, 质量:{params_thumb.get('quality', 'N/A')}")
                
                results["files"].append({
                    "pdf": pdf_file.name,
                    "page": page_num + 1,
                    "global_page": current_page,
                    "high": str(high_path),
                    "thumb": str(thumb_path)
                })
            
            doc.close()
            results["total_pages"] += total_pages
            print(f"   ✅ {pdf_file.name} 处理完成")
            
        except Exception as e:
            print(f"   ❌ 处理 {pdf_file.name} 时出错: {e}")
            results["files"].append({
                "pdf": pdf_file.name,
                "error": str(e)
            })
    
    print("\n" + "=" * 60)
    print(f"✅ 全部完成！")
    print(f"   📄 处理PDF: {results['total_pdfs']} 个")
    print(f"   📄 总页数: {results['total_pages']} 页")
    print(f"   📸 高清图目录: {gallery_dir}")
    print(f"   🖼️  缩略图目录: {gallery_zip_dir}")
    
    return results


def main():
    """命令行入口"""
    import argparse
    
    parser = argparse.ArgumentParser(
        description="将所有PDF转换为双图片库：高清图(gallery/) + 缩略图(galleryZip/)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
示例:
  # 基本用法 - 处理当前目录所有PDF
  python pdf_splitter.py
  
  # 指定输出目录
  python pdf_splitter.py -o ./my_images
  
  # 调整高清图DPI（越高越清晰，但文件越大）
  python pdf_splitter.py --dpi-high 300
  
  # 调整缩略图大小限制
  python pdf_splitter.py --max-thumb 50
  
  # 调整高清图大小限制
  python pdf_splitter.py --max-high 5
        """
    )
    
    parser.add_argument(
        "-o", "--output",
        dest="output_dir",
        default=".",
        help="输出根目录（默认：当前目录）"
    )
    parser.add_argument(
        "--dpi-high",
        type=int,
        default=200,
        help="高清图DPI（默认：200，范围：150-400）"
    )
    parser.add_argument(
        "--dpi-thumb",
        type=int,
        default=72,
        help="缩略图DPI（默认：72）"
    )
    parser.add_argument(
        "--max-high",
        type=float,
        default=3.0,
        help="高清图最大大小（MB，默认：3.0）"
    )
    parser.add_argument(
        "--max-thumb",
        type=float,
        default=100,
        help="缩略图最大大小（KB，默认：100）"
    )
    
    args = parser.parse_args()
    
    try:
        process_all_pdfs_to_gallery(
            output_dir=args.output_dir,
            dpi_high=args.dpi_high,
            dpi_thumb=args.dpi_thumb,
            max_size_high_mb=args.max_high,
            max_size_thumb_kb=args.max_thumb,
        )
    
    except KeyboardInterrupt:
        print("\n\n⏹️  用户中断")
        sys.exit(0)
    except Exception as e:
        print(f"❌ 错误: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()