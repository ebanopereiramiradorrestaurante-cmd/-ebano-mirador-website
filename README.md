# Ébano Mirador - Sitio Web

Sitio web informativo para Ébano Mirador - restaurante y venue de eventos a 1.500m de altura en Pereira, Colombia.

## 🚀 Características

- ✅ Diseño responsive (mobile-first, tablet, desktop)
- ✅ Storytelling visual premium
- ✅ Formulario de contacto con validación
- ✅ Galería con lightbox
- ✅ Lazy loading de imágenes
- ✅ Animaciones suaves
- ✅ SEO optimizado
- ✅ Accesibilidad (WCAG 2.1 AA)
- ✅ Performance optimizado

## 📁 Estructura del Proyecto

```
ebano-mirador-website/
├── index.html          # Página principal
├── style.css           # Estilos responsive
├── script.js            # Funcionalidades JavaScript
├── images/              # Imágenes del sitio
│   ├── hero-atardecer.jpg
│   ├── why-section-*.jpg
│   ├── events/
│   │   ├── events-bodas.jpg
│   │   ├── events-despedidas.jpg
│   │   ├── events-cumpleanos.jpg
│   │   ├── events-baby-shower.jpg
│   │   ├── events-corporativos.jpg
│   │   ├── events-coworking.jpg
│   │   └── events-cenas.jpg
│   └── gallery/
│       ├── gallery-1.jpg
│       ├── gallery-2.jpg
│       └── ... (hasta gallery-15.jpg)
├── manifest.json        # PWA manifest (opcional)
└── README.md           # Este archivo
```

## 🖼️ Imágenes Requeridas

Necesitas agregar las siguientes imágenes en las carpetas correspondientes:

### Hero Section
- `images/hero-atardecer.jpg` (1920x1080px recomendado)

### Why Section (3 imágenes)
- `images/why-section-vista.jpg` (600x400px)
- `images/why-section-espacios.jpg` (600x400px)
- `images/why-section-experiencia.jpg` (600x400px)

### Events Section (7 imágenes)
- `images/events-bodas.jpg` (400x400px)
- `images/events-despedidas.jpg` (400x400px)
- `images/events-cumpleanos.jpg` (400x400px)
- `images/events-baby-shower.jpg` (400x400px)
- `images/events-corporativos.jpg` (400x400px)
- `images/events-coworking.jpg` (400x400px)
- `images/events-cenas.jpg` (400x400px)

### Gallery Section (15 imágenes)
- `images/gallery/gallery-1.jpg` hasta `gallery-15.jpg`
- Tamaños variados (recomendado: mix de orientaciones)

**Nota:** Todas las imágenes deben estar optimizadas (JPEG/WebP, <500KB cada una)

## ⚙️ Configuración

### 1. Formulario de Contacto

El formulario está configurado para usar Formspree. Necesitas:

1. Crear una cuenta en [Formspree](https://formspree.io)
2. Crear un nuevo formulario
3. Obtener tu Form ID
4. Reemplazar `YOUR_FORM_ID` en `script.js` (línea ~200):

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**Alternativa: Google Sheets**

Si prefieres usar Google Sheets, puedes usar [Sheet2API](https://sheet2api.com) o similar:

1. Crea una hoja de cálculo en Google Sheets
2. Configura Sheet2API
3. Reemplaza la función `sendToGoogleSheets()` en `script.js` con tu endpoint

### 2. Google Maps

El iframe de Google Maps necesita la ubicación exacta. Actualiza la URL en `index.html`:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5!2d-75.6964!3d4.8133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNDgnNDcuOSJOIDc1wrA0MSc0Ny4wIlc!5e0!3m2!1ses!2sco!4v1234567890"
```

Para obtener la URL correcta:
1. Ve a Google Maps
2. Busca "Ébano Mirador, Pereira"
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código iframe

### 3. Redes Sociales

Verifica que los enlaces de redes sociales sean correctos:
- Instagram: `https://instagram.com/miradorebanopereira`
- WhatsApp: `https://wa.me/573104827580?text=...`

## 🚀 Despliegue

### Opción 1: Vercel (Recomendado)

1. Instala Vercel CLI:
```bash
npm i -g vercel
```

2. En el directorio del proyecto:
```bash
vercel
```

3. Sigue las instrucciones en pantalla

### Opción 2: Netlify

1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. O conecta tu repositorio Git

### Opción 3: GitHub Pages

1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings → Pages
4. Selecciona la rama `main` y carpeta `/root`

### Opción 4: Hosting Tradicional

1. Sube todos los archivos vía FTP
2. Asegúrate de que `index.html` esté en la raíz
3. Configura SSL/HTTPS

## 🔧 Optimizaciones Recomendadas

### Imágenes

1. **Optimizar imágenes:**
   - Usa [TinyPNG](https://tinypng.com) o [Squoosh](https://squoosh.app)
   - Convierte a WebP cuando sea posible
   - Usa `srcset` para diferentes densidades

2. **Lazy Loading:**
   - Ya implementado con Intersection Observer
   - Las imágenes de la galería se cargan cuando son visibles

### Performance

1. **Minificar CSS y JS:**
   ```bash
   # CSS
   npx clean-css-cli -o style.min.css style.css
   
   # JS
   npx terser script.js -o script.min.js
   ```

2. **CDN para imágenes:**
   - Considera usar Cloudinary o similar
   - Actualiza las rutas en el HTML

### SEO

1. **Google Search Console:**
   - Verifica el sitio
   - Envía sitemap.xml

2. **Meta tags:**
   - Ya incluidos en el HTML
   - Actualiza `og:image` con la URL completa

3. **Structured Data:**
   - Ya incluido (Schema.org)
   - Verifica en [Google Rich Results Test](https://search.google.com/test/rich-results)

## 📱 Testing

### Dispositivos a Probar

- ✅ iPhone 12 (390px)
- ✅ iPad (768px)
- ✅ Desktop (1920px)
- ✅ Otros tamaños comunes

### Checklist de Testing

- [ ] Formulario envía correctamente
- [ ] Todos los links funcionan (WhatsApp, Instagram, Maps)
- [ ] Imágenes cargan correctamente
- [ ] No hay overflow horizontal
- [ ] Modal funciona en mobile y desktop
- [ ] Lightbox de galería funciona
- [ ] Menú hamburguesa funciona en mobile
- [ ] Smooth scroll funciona
- [ ] Validación de formulario funciona

### Lighthouse Score

Objetivo: >90 en todas las categorías

```bash
# En Chrome DevTools
# Lighthouse → Generate report
```

## 🎨 Personalización

### Colores

Los colores están definidos en `:root` en `style.css`:

```css
--color-gold-primary: #D4AF37;
--color-gold-dark: #8B7E6B;
--color-black: #1a1a1a;
--color-cream: #F5F5F0;
```

### Tipografía

- Headings: Georgia (serif)
- Body: Inter (sans-serif)

Cambia las fuentes en el `<head>` del HTML si lo deseas.

## 📞 Soporte

Para preguntas o problemas:
- WhatsApp: 310 482 7580
- Email: ebano@mirador.com

## 📄 Licencia

© 2025 Ébano Mirador. Todos los derechos reservados.

---

**Desarrollado con ❤️ para Ébano Mirador**

