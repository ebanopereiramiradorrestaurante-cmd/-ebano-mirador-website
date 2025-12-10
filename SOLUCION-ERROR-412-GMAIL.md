# Solución para Error 412 de Gmail en EmailJS

## Problema
El error **412** con el mensaje "Gmail_API: Invalid grant. Please reconnect your Gmail account" indica que la conexión entre EmailJS y la cuenta de Gmail ha expirado.

## Solución (Para el Administrador)

### Paso 1: Acceder al Dashboard de EmailJS
1. Ve a [https://dashboard.emailjs.com](https://dashboard.emailjs.com)
2. Inicia sesión con tu cuenta

### Paso 2: Reconectar Gmail
1. En el menú lateral, haz clic en **"Servicios de correo electrónico"**
2. Busca el servicio **"Gmail"** (ID: `service_ldilgbs`)
3. Haz clic en el servicio para editarlo
4. Verás un mensaje de error: **"412 Gmail_API: Concesión no válida. Vuelva a conectar su cuenta de Gmail."**
5. Haz clic en el botón **"Desconectar"** junto a la cuenta de Gmail
6. Luego haz clic en **"Conectar"** o **"Reconectar"**
7. Autoriza nuevamente los permisos de Gmail
8. Guarda los cambios haciendo clic en **"Servicio de actualización"**

### Paso 3: Verificar
1. En la misma página, marca la casilla **"Enviar correo electrónico de prueba para verificar la configuración"**
2. Haz clic en **"Servicio de actualización"**
3. Deberías recibir un correo de prueba si todo está correcto

## Nota Importante
- Este error **NO es un problema del código** del sitio web
- Es un problema de **autenticación entre EmailJS y Gmail**
- El sitio web tiene un **fallback automático a WhatsApp** cuando detecta este error
- Los usuarios pueden contactar por WhatsApp mientras se soluciona el problema

## Fallback Implementado
Cuando se detecta el error 412:
1. Se muestra un mensaje claro al usuario
2. Se ofrece redirección automática a WhatsApp con todos los datos del formulario
3. El usuario puede contactar directamente sin perder su información
