# 🖼️ Optimización de Imágenes - GUÍA URGENTE

## ⚠️ PROBLEMA DETECTADO

Tus imágenes son **MUY PESADAS** (5-7MB cada una). Esto hace que:
- ❌ El sitio cargue muy lento
- ❌ Las imágenes aparezcan en negro
- ❌ Los usuarios abandonen el sitio

## ✅ SOLUCIÓN: Optimizar Imágenes

### Opción 1: Usar Herramienta Online (MÁS FÁCIL)

1. **Ve a:** https://tinypng.com
2. **Arrastra todas tus imágenes** a la página
3. **Descarga las optimizadas**
4. **Reemplaza las imágenes originales** con las optimizadas

### Opción 2: Usar el Script Automático

He creado un script que optimiza automáticamente todas las imágenes:

```bash
# Dar permisos de ejecución
chmod +x optimizar-imagenes.sh

# Ejecutar el script
./optimizar-imagenes.sh
```

**Nota:** Requiere ImageMagick o sips (nativo de macOS)

### Opción 3: Optimizar Manualmente

#### Tamaños Recomendados:

- **Hero:** Máximo 1920px de ancho, calidad 85%
- **Why Section:** Máximo 800px de ancho, calidad 85%
- **Events:** Máximo 600px de ancho, calidad 85%
- **Food:** Máximo 400px de ancho, calidad 85%

#### Herramientas:

1. **TinyPNG** - https://tinypng.com (Recomendado)
2. **Squoosh** - https://squoosh.app (Google)
3. **ImageOptim** (Mac App Store)

## 📊 Tamaños Actuales vs Recomendados

| Imagen | Tamaño Actual | Tamaño Recomendado |
|--------|---------------|-------------------|
| Hero | 7.0MB | <500KB |
| Why Section | 5.8-6.4MB | <200KB cada una |
| Events | 6.2-6.9MB | <150KB cada una |
| Food | 5.8-6.7MB | <100KB cada una |

## 🚀 Después de Optimizar

1. Reemplaza las imágenes en la carpeta `images/`
2. Sube los cambios:
   ```bash
   git add .
   git commit -m "Optimizar imágenes para mejor performance"
   git push
   ```
3. Espera 1-2 minutos
4. Recarga tu sitio → Debería cargar mucho más rápido

## ✅ Mejoras Implementadas

- ✅ Agregado `decoding="async"` a todas las imágenes
- ✅ Agregado fondo oscuro mientras cargan
- ✅ Mejorado lazy loading
- ✅ Agregado sistema de carga progresiva

---

**⚠️ IMPORTANTE:** Optimiza las imágenes ANTES de subir los cambios. El sitio será mucho más rápido.

