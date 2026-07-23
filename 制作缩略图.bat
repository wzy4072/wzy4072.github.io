@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

echo ========================================
echo ImageMagick PNG 批量压缩
echo ========================================
echo.

set SOURCE=assets\images\gallery
set TARGET=assets\images\galleryZip
set MAX_SIZE_KB=100
set MAX_DIM=1200

echo 源目录: %SOURCE%
echo 目标目录: %TARGET%
echo 目标大小: %MAX_SIZE_KB% KB
echo 最大尺寸: %MAX_DIM% px
echo.

if not exist "%SOURCE%" (
    echo ❌ 错误: 源目录不存在!
    pause
    exit /b 1
)

if not exist "%TARGET%" mkdir "%TARGET%"

echo 开始处理...
echo ----------------------------------------

for %%f in ("%SOURCE%\*.png" "%SOURCE%\*.jpg" "%SOURCE%\*.jpeg" "%SOURCE%\*.webp" "%SOURCE%\*.bmp") do (
    if exist "%%f" (
        set FILENAME=%%~nf
        echo 处理: !FILENAME!%%~xf
        
        rem 获取原始大小
        for %%a in ("%%f") do set ORIGINAL=%%~za
        set /a ORIGINAL_KB=!ORIGINAL!/1024
        
        rem 先尝试高质量
        magick "%%f" -resize %MAX_DIM%x%MAX_DIM%^> -quality 85 -strip "%TARGET%\!FILENAME!.png"
        
        rem 检查压缩后大小
        for %%a in ("%TARGET%\!FILENAME!.png") do set COMPRESSED=%%~za
        set /a COMPRESSED_KB=!COMPRESSED!/1024
        
        if !COMPRESSED_KB! leq %MAX_SIZE_KB% (
            echo   ✅ !COMPRESSED_KB!KB (原始: !ORIGINAL_KB!KB)
        ) else (
            echo   ⚠️  !COMPRESSED_KB!KB 超过限制，降低质量...
            
            rem 降低质量重新压缩
            for %%q in (75 65 55 45 35 25 15) do (
                magick "%%f" -resize %MAX_DIM%x%MAX_DIM%^> -quality %%q -strip "%TARGET%\!FILENAME!.png"
                for %%a in ("%TARGET%\!FILENAME!.png") do set COMPRESSED=%%~za
                set /a COMPRESSED_KB=!COMPRESSED!/1024
                if !COMPRESSED_KB! leq %MAX_SIZE_KB% (
                    echo   ✅ !COMPRESSED_KB!KB (质量 %%q)
                    goto :next
                )
            )
            
            rem 如果还是不行，缩小尺寸
            echo   ⚠️  缩小尺寸到 800x800...
            magick "%%f" -resize 800x800^> -quality 75 -strip "%TARGET%\!FILENAME!.png"
            for %%a in ("%TARGET%\!FILENAME!.png") do set COMPRESSED=%%~za
            set /a COMPRESSED_KB=!COMPRESSED!/1024
            echo   ✅ !COMPRESSED_KB!KB (缩小尺寸)
        )
        
        :next
        echo.
    )
)

echo ----------------------------------------
echo ✅ 处理完成!
echo 📁 输出目录: %TARGET%
pause