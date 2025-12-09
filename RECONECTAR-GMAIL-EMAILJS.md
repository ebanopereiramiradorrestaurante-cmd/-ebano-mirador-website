# 🔧 Reconectar Gmail en EmailJS

## ⚠️ Problema Actual

El error que estás viendo:
```
Gmail_API: Invalid grant. Please reconnect your Gmail account.
```

Significa que la conexión de Gmail con EmailJS expiró y necesita ser reconectada.

---

## ✅ Solución (5 minutos)

### Paso 1: Ir a EmailJS Dashboard
1. Ve a https://www.emailjs.com
2. Inicia sesión con tu cuenta
3. Ve a **"Email Services"** en el menú lateral

### Paso 2: Reconectar Gmail
1. Busca el servicio **`service_ldilgbs`** (o el que tengas configurado)
2. Haz clic en el servicio para abrirlo
3. Verás un botón que dice **"Reconnect"** o **"Reconectar"**
4. Haz clic en **"Reconnect"**
5. Se abrirá una ventana de Google para autorizar
6. Selecciona la cuenta: **ebanopereiramiradorrestaurante@gmail.com**
7. Haz clic en **"Permitir"** o **"Allow"**

### Paso 3: Verificar
1. Deberías ver un mensaje de éxito: **"Service reconnected successfully"**
2. El estado del servicio debería cambiar a **"Active"** o **"Connected"**

### Paso 4: Probar el Formulario
1. Recarga tu página web: `miradorebanopereira.com`
2. Llena el formulario de prueba
3. Envía el formulario
4. Deberías recibir el email en: **ebanopereiramiradorrestaurante@gmail.com**

---

## 🎯 Información de tu Configuración

- **Service ID:** `service_ldilgbs`
- **Template ID:** `template_gp3o3tk`
- **Public Key:** `2HXw__rvQyUIqX4FF`
- **Email destino:** `ebanopereiramiradorrestaurante@gmail.com`

---

## 🆘 Si No Funciona

### Opción 1: Eliminar y Crear Nuevo Servicio
1. Ve a **"Email Services"**
2. Elimina el servicio actual
3. Haz clic en **"Add New Service"**
4. Selecciona **"Gmail"**
5. Conecta tu cuenta de Gmail
6. **Copia el nuevo Service ID**
7. Actualiza el Service ID en `script.js` (línea ~285)

### Opción 2: Usar OAuth 2.0 (Más Seguro)
1. En el servicio de Gmail, cambia a **"OAuth 2.0"** en lugar de "Gmail API"
2. Sigue las instrucciones para configurar OAuth 2.0
3. Esto es más seguro y no expira tan rápido

### Opción 3: Usar SMTP (Alternativa)
1. En EmailJS, crea un nuevo servicio
2. Selecciona **"SMTP"** en lugar de "Gmail"
3. Configura con:
   - **Host:** `smtp.gmail.com`
   - **Port:** `587`
   - **Username:** `ebanopereiramiradorrestaurante@gmail.com`
   - **Password:** Usa una "App Password" de Google (no tu contraseña normal)

---

## 📝 Nota Importante

Las conexiones de Gmail API pueden expirar después de un tiempo. Si esto vuelve a pasar:
- Simplemente reconecta siguiendo los pasos 1-3
- O considera usar OAuth 2.0 para una conexión más estable

---

## ✅ Después de Reconectar

Una vez reconectado, el formulario debería funcionar inmediatamente. No necesitas cambiar ningún código.

**¡Listo!** 🎉

