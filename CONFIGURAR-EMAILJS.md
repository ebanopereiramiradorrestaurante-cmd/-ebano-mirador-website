# 📧 Configurar EmailJS para el Formulario

## 🎯 Objetivo
Configurar EmailJS para que los formularios se envíen automáticamente a: **ebanopereiramiradorrestaurante@gmail.com**

## 📋 Pasos (5 minutos)

### Paso 1: Crear Cuenta en EmailJS
1. Ve a https://www.emailjs.com
2. Haz clic en "Sign Up" (es gratis hasta 200 emails/mes)
3. Crea tu cuenta con tu email

### Paso 2: Crear un Servicio de Email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona "Gmail" (o el servicio que uses)
4. Conecta tu cuenta de Gmail
5. **Copia el Service ID** (ejemplo: `service_abc123`)

### Paso 3: Crear un Template de Email
1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura así:

**Subject (Asunto):**
```
Nueva Solicitud de Evento - Ébano Mirador
```

**Content (Contenido):**
```
Nueva solicitud de evento recibida:

Nombre: {{from_name}}
Email: {{from_email}}
Teléfono: {{phone}}
Tipo de Evento: {{event_type}}
Número de Personas: {{people}}
Fecha Tentativa: {{date}}
Notas: {{message}}

---
Este email fue enviado desde el formulario de contacto de Ébano Mirador.
```

4. En "To Email", escribe: `ebanopereiramiradorrestaurante@gmail.com`
5. **Copia el Template ID** (ejemplo: `template_xyz789`)

### Paso 4: Obtener tu Public Key
1. Ve a "Account" → "General"
2. **Copia tu Public Key** (ejemplo: `abc123xyz789`)

### Paso 5: Actualizar el Código
Abre `script.js` y busca estas líneas (alrededor de la línea 270 y 520):

**Línea ~270 (en la función de envío):**
```javascript
await emailjs.send(
    'service_ebano_mirador',  // ← Reemplaza con tu Service ID
    'template_ebano_form',     // ← Reemplaza con tu Template ID
    templateParams
);
```

**Línea ~520 (inicialización):**
```javascript
emailjs.init('YOUR_PUBLIC_KEY'); // ← Reemplaza con tu Public Key
```

### Ejemplo Final:
```javascript
// Inicialización (línea ~520)
emailjs.init('abc123xyz789');

// Envío (línea ~270)
await emailjs.send(
    'service_abc123',
    'template_xyz789',
    templateParams
);
```

## ✅ Verificar que Funciona
1. Abre tu sitio web
2. Llena el formulario de prueba
3. Envía el formulario
4. Revisa tu email: **ebanopereiramiradorrestaurante@gmail.com**

## 🆘 Problemas Comunes

**Error: "EmailJS no está cargado"**
- Verifica que el script de EmailJS esté en el HTML (ya está incluido)

**Error: "Invalid service ID"**
- Verifica que el Service ID sea correcto
- Asegúrate de que el servicio esté activo en EmailJS

**Error: "Invalid template ID"**
- Verifica que el Template ID sea correcto
- Asegúrate de que el template tenga el email destino configurado

**No llegan los emails:**
- Revisa la carpeta de spam
- Verifica que el email destino esté correcto en el template
- Revisa los logs en EmailJS dashboard

## 📞 Alternativa Rápida (Sin EmailJS)

Si prefieres algo más simple, puedes usar **Formspree**:
1. Ve a https://formspree.io
2. Crea un formulario
3. Configura el email destino: `ebanopereiramiradorrestaurante@gmail.com`
4. Reemplaza el código en `script.js` línea ~265 con:
```javascript
const response = await fetch('https://formspree.io/f/TU_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        nombre: formData.nombre,
        email: formData.email,
        telefono: formData.telefono,
        tipoEvento: formData.tipoEvento,
        personas: formData.personas,
        fecha: formData.fecha,
        notas: formData.notas
    })
});
```

---

**¡Listo!** Una vez configurado, todos los formularios llegarán automáticamente a tu email. 🎉

