# 🐛 Guía de Debugging en Mac - Ébano Mirador

## 📋 Comandos para Ver Errores en Terminal (Mac)

### 1. **Abrir Terminal en Mac**
- Presiona `Cmd + Espacio` (Command + Space)
- Escribe "Terminal" y presiona Enter
- O ve a: Aplicaciones → Utilidades → Terminal

### 2. **Navegar a tu Proyecto**
```bash
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
```

### 3. **Iniciar Servidor Local para Testing**
```bash
python3 -m http.server 8000
```

Luego abre en el navegador: `http://localhost:8000`

### 4. **Ver Errores del Formulario en la Consola del Navegador**

**Opción A: Chrome/Edge (Recomendado)**
1. Abre tu sitio: `http://localhost:8000` o `miradorebanopereira.com`
2. Presiona `Cmd + Option + I` (Command + Option + I)
3. Ve a la pestaña "Console"
4. Intenta enviar el formulario
5. Copia todos los mensajes que aparezcan (especialmente los rojos)

**Opción B: Safari**
1. Abre Safari
2. Ve a Safari → Preferencias → Avanzado
3. Marca "Mostrar menú de desarrollo en la barra de menú"
4. Abre tu sitio
5. Presiona `Cmd + Option + C`
6. Ve a la pestaña "Console"

### 5. **Ver Errores de Red (Network)**
1. Abre las herramientas de desarrollador (`Cmd + Option + I`)
2. Ve a la pestaña "Network" (Red)
3. Intenta enviar el formulario
4. Busca cualquier solicitud que falle (aparecerá en rojo)
5. Haz clic en la solicitud fallida y revisa los detalles

### 6. **Verificar si EmailJS está Cargado**
En la consola del navegador, escribe:
```javascript
typeof emailjs
```

Debería mostrar: `"object"` (no `"undefined"`)

### 7. **Verificar Inicialización de EmailJS**
En la consola del navegador, escribe:
```javascript
emailjs
```

Debería mostrar el objeto EmailJS con sus métodos.

### 8. **Probar Envío Manual desde Consola**
```javascript
emailjs.send(
    'service_ldilgbs',
    'template_gp3o3tk',
    {
        from_name: 'Test',
        from_email: 'test@test.com',
        phone: '1234567890',
        event_type: 'Bodas',
        people: '20',
        date: '2025-12',
        message: 'Test desde consola'
    }
).then(
    response => console.log('✅ Éxito:', response),
    error => console.error('❌ Error:', error)
);
```

## 🔍 Errores Comunes y Soluciones

### Error: "EmailJS no está cargado"
**Solución:**
- Verifica tu conexión a internet
- Recarga la página (Cmd + R)
- Verifica que el script de EmailJS esté en el HTML

### Error: "Invalid service ID" o "Invalid template ID"
**Solución:**
- Verifica en EmailJS dashboard que los IDs sean correctos
- Service ID: `service_ldilgbs`
- Template ID: `template_gp3o3tk`
- Public Key: `2HXw__rvQyUIqX4FF`

### Error: "Network Error" o "Timeout"
**Solución:**
- Verifica tu conexión a internet
- Revisa si hay bloqueadores de anuncios activos
- Intenta desde otro navegador

### El formulario se queda cargando
**Posibles causas:**
1. EmailJS no está inicializado
2. Error de red
3. Timeout del servidor

**Para ver el error exacto:**
1. Abre la consola (Cmd + Option + I)
2. Intenta enviar el formulario
3. Busca mensajes en rojo
4. Copia el mensaje completo y compártelo

## 📝 Comandos Útiles en Terminal

### Ver archivos del proyecto
```bash
ls -la
```

### Ver contenido de un archivo
```bash
cat script.js | grep -A 10 "emailjs.send"
```

### Buscar errores en el código
```bash
grep -n "error" script.js
```

### Ver el último commit
```bash
git log -1
```

### Ver cambios no guardados
```bash
git status
```

## 🚀 Probar Localmente

1. **Inicia el servidor:**
```bash
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
python3 -m http.server 8000
```

2. **Abre en el navegador:**
```
http://localhost:8000
```

3. **Abre la consola:**
- Chrome/Edge: `Cmd + Option + I`
- Safari: `Cmd + Option + C`

4. **Intenta enviar el formulario y revisa los mensajes en consola**

## 📞 Si Necesitas Ayuda

Cuando encuentres un error, copia:
1. El mensaje completo de error (de la consola)
2. La pestaña "Network" si hay errores de red
3. Una captura de pantalla si es posible

---

**Nota:** Todos los errores del formulario aparecerán en la consola del navegador, no en la terminal. La terminal solo se usa para iniciar el servidor local.

