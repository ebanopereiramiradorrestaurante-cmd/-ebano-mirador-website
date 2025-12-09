#!/bin/bash

# Script para optimizar imágenes usando ImageMagick o sips (nativo de macOS)

echo "🖼️  Optimizando imágenes..."

# Verificar si ImageMagick está instalado
if command -v convert &> /dev/null; then
    echo "✅ Usando ImageMagick"
    TOOL="imagemagick"
elif command -v sips &> /dev/null; then
    echo "✅ Usando sips (nativo de macOS)"
    TOOL="sips"
else
    echo "❌ No se encontró ImageMagick ni sips"
    echo "Instala ImageMagick: brew install imagemagick"
    exit 1
fi

# Optimizar hero (máximo 1920px de ancho, calidad 85%)
if [ "$TOOL" == "imagemagick" ]; then
    convert images/hero-atardecer.png -resize 1920x -quality 85 -strip images/hero-atardecer-optimized.png
    mv images/hero-atardecer-optimized.png images/hero-atardecer.png
elif [ "$TOOL" == "sips" ]; then
    sips -Z 1920 images/hero-atardecer.png --out images/hero-atardecer-temp.png
    mv images/hero-atardecer-temp.png images/hero-atardecer.png
fi

# Optimizar imágenes de Why section (máximo 800px de ancho)
for img in why-section-vista.png why-section-espacios.png why-section-experiencia.png; do
    if [ -f "images/$img" ]; then
        if [ "$TOOL" == "imagemagick" ]; then
            convert images/$img -resize 800x -quality 85 -strip images/${img%.png}-optimized.png
            mv images/${img%.png}-optimized.png images/$img
        elif [ "$TOOL" == "sips" ]; then
            sips -Z 800 images/$img --out images/${img%.png}-temp.png
            mv images/${img%.png}-temp.png images/$img
        fi
    fi
done

# Optimizar imágenes de eventos (máximo 600px de ancho)
for img in images/events/*.png; do
    if [ -f "$img" ]; then
        if [ "$TOOL" == "imagemagick" ]; then
            convert "$img" -resize 600x -quality 85 -strip "${img%.png}-optimized.png"
            mv "${img%.png}-optimized.png" "$img"
        elif [ "$TOOL" == "sips" ]; then
            sips -Z 600 "$img" --out "${img%.png}-temp.png"
            mv "${img%.png}-temp.png" "$img"
        fi
    fi
done

# Optimizar imágenes de comida (máximo 400px de ancho)
for img in images/food/*.png images/food/*.JPG; do
    if [ -f "$img" ]; then
        if [ "$TOOL" == "imagemagick" ]; then
            convert "$img" -resize 400x -quality 85 -strip "${img%.*}-optimized.${img##*.}"
            mv "${img%.*}-optimized.${img##*.}" "$img"
        elif [ "$TOOL" == "sips" ]; then
            sips -Z 400 "$img" --out "${img%.*}-temp.${img##*.}"
            mv "${img%.*}-temp.${img##*.}" "$img"
        fi
    fi
done

echo "✅ Optimización completada!"
echo "📊 Verificando tamaños..."

find images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.JPG" \) -exec ls -lh {} \; | awk '{print $5, $9}'


