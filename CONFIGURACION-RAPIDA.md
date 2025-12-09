# ⚡ Configuración Rápida - Ébano Mirador

## 🎯 Pasos Esenciales Antes de Publicar

### 1. 📝 Configurar Formulario de Contacto

**Opción A: Formspree (Recomendado - Más fácil)**

1. Ve a https://formspree.io y crea una cuenta gratuita
2. Crea un nuevo formulario
3. Copia tu Form ID (ejemplo: `xvgkqyzw`)
4. Abre `script.js` y busca la línea 268
5. Reemplaza `YOUR_FORM_ID` con tu ID:

```javascript
const response = await fetch('https://formspree.io/f/xvgkqyzw', {
```

**Opción B: Google Sheets**

1. Crea una hoja de cálculo en Google Sheets
2. Configura Sheet2API (https://sheet2api.com) o usa Google Apps Script
3. Actualiza la función `sendToGoogleSheets()` en `script.js`

### 2. 🗺️ Actualizar Google Maps

1. Ve a Google Maps y busca "Ébano Mirador, Pereira"
2. Haz clic en "Compartir" → "Insertar un mapa"
3. Copia el código iframe
4. Abre `index.html` y busca la línea con `<iframe src="..."`
5. Reemplaza la URL del iframe con la tuya

### 3. 📸 Agregar Imágenes

**IMPORTANTE:** El sitio NO funcionará correctamente sin las imágenes.

Ver el archivo `IMAGENES-NECESARIAS.md` para la lista completa.

**Mínimo necesario para que funcione:**
- `images/hero-atardecer.jpg` (obligatorio)
- `images/why-section-vista.jpg`
- `images/why-section-espacios.jpg`
- `images/why-section-experiencia.jpg`
- Al menos 1 imagen en `images/events/` y `images/gallery/`

### 4. 🔗 Verificar Enlaces de Redes Sociales

Abre `index.html` y verifica que estos enlaces sean correctos:

- **Instagram:** Busca `instagram.com/miradorebanopereira` y verifica
- **WhatsApp:** El número `573104827580` ya está configurado
- **Email:** Busca `ebano@mirador.com` y actualiza si es necesario

### 5. 📱 Probar en Dispositivos

Antes de publicar, prueba:
- [ ] En tu teléfono móvil
- [ ] En una tablet
- [ ] En desktop
- [ ] Que el formulario envíe correctamente
- [ ] Que todos los links funcionen

## ✅ Checklist Pre-Lanzamiento

- [ ] Formulario configurado y probado
- [ ] Google Maps actualizado con ubicación correcta
- [ ] Todas las imágenes agregadas
- [ ] Enlaces de redes sociales verificados
- [ ] Email de contacto actualizado (si es necesario)
- [ ] Probado en mobile, tablet y desktop
- [ ] Sin errores en la consola del navegador

## 🚀 Listo para Publicar

Una vez completados los pasos anteriores, puedes desplegar el sitio en:

- **Vercel** (más fácil): https://vercel.com
- **Netlify**: https://netlify.com
- **GitHub Pages**: Gratis con GitHub
- **Cualquier hosting estático**

Ver `README.md` para instrucciones detalladas de despliegue.

---

**¿Problemas?** Revisa el `README.md` completo o contacta al desarrollador.

