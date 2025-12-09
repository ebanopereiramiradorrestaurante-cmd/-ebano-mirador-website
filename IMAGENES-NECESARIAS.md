# 📸 Imágenes Necesarias para Ébano Mirador

Este documento lista todas las imágenes que necesitas agregar al sitio web.

## 📋 Lista de Imágenes

### 1. Hero Section (1 imagen)
- **Ruta:** `images/hero-atardecer.jpg`
- **Tamaño recomendado:** 1920x1080px
- **Descripción:** Vista del atardecer desde Ébano Mirador con luces doradas
- **Peso máximo:** 500KB

### 2. Why Section (3 imágenes)
- **Ruta:** `images/why-section-vista.jpg`
  - Vista panorámica de Pereira desde Ébano Mirador
  - Tamaño: 600x400px
  
- **Ruta:** `images/why-section-espacios.jpg`
  - Iglú verde con luces en Ébano Mirador
  - Tamaño: 600x400px
  
- **Ruta:** `images/why-section-experiencia.jpg`
  - Gente celebrando en Ébano Mirador
  - Tamaño: 600x400px

### 3. Events Section (7 imágenes)
Todas en la carpeta `images/events/`:

- `events-bodas.jpg` - Boda en Ébano Mirador (400x400px)
- `events-despedidas.jpg` - Despedida de soltera/soltero (400x400px)
- `events-cumpleanos.jpg` - Cumpleaños (400x400px)
- `events-baby-shower.jpg` - Baby shower (400x400px)
- `events-corporativos.jpg` - Evento corporativo (400x400px)
- `events-coworking.jpg` - Coworking/reunión (400x400px)
- `events-cenas.jpg` - Cena romántica (400x400px)

### 4. Gallery Section (15 imágenes)
Todas en la carpeta `images/gallery/`:

- `gallery-1.jpg` hasta `gallery-15.jpg`
- Tamaños variados (mix de orientaciones)
- Recomendado: Algunas en formato vertical, otras horizontal
- Peso máximo: 300KB cada una

### 5. Icons para PWA (Opcional)
En la carpeta `images/icons/`:

- `icon-192.png` - 192x192px
- `icon-512.png` - 512x512px

## 🛠️ Herramientas Recomendadas

### Optimización de Imágenes
1. **TinyPNG** - https://tinypng.com
   - Comprime imágenes sin pérdida de calidad visible
   - Soporta PNG y JPEG

2. **Squoosh** - https://squoosh.app
   - Herramienta de Google
   - Permite ajustar calidad y formato

3. **ImageOptim** (Mac) o **FileOptimizer** (Windows)
   - Aplicaciones de escritorio para optimización en lote

### Conversión a WebP (Opcional)
Para mejor performance, considera crear versiones WebP:
- `hero-atardecer.webp`
- `why-section-vista.webp`
- etc.

Puedes usar Squoosh o herramientas online como:
- https://convertio.co/jpg-webp/

## 📝 Notas Importantes

1. **Nombres de archivos:** Usa exactamente los nombres especificados (case-sensitive)
2. **Formatos:** JPEG para fotos, PNG solo si necesitas transparencia
3. **Alt text:** Ya está configurado en el HTML, pero verifica que sea descriptivo
4. **Derechos:** Asegúrate de tener los derechos de uso de todas las imágenes

## ✅ Checklist

- [ ] Hero image agregada
- [ ] 3 imágenes de Why section agregadas
- [ ] 7 imágenes de Events agregadas
- [ ] 15 imágenes de Gallery agregadas
- [ ] Todas las imágenes optimizadas (<500KB)
- [ ] Alt text verificado en HTML
- [ ] Imágenes probadas en diferentes dispositivos

## 🚀 Después de Agregar Imágenes

1. Verifica que todas las rutas sean correctas
2. Prueba el sitio en diferentes navegadores
3. Verifica que el lazy loading funcione
4. Comprueba el performance con Lighthouse

