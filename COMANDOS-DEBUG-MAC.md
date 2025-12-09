# 🐛 Comandos para Depurar en Mac Terminal

## Para ver errores del navegador en tiempo real:

### Opción 1: Abrir Chrome con logs en terminal
```bash
# Abre Chrome desde terminal con logs habilitados
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-logging --log-level=0
```

### Opción 2: Ver logs del sistema
```bash
# Ver logs del sistema en tiempo real
log stream --predicate 'process == "Google Chrome"' --level debug
```

### Opción 3: Servidor local con logs
```bash
# Desde la carpeta del proyecto
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano

# Inicia servidor local
python3 -m http.server 8000

# Luego abre en navegador: http://localhost:8000
# Y abre la consola del navegador (Cmd+Option+I)
```

## Para ver errores de JavaScript en la consola del navegador:

1. Abre tu sitio: `miradorebanopereira.com`
2. Presiona `Cmd + Option + I` (o `F12`)
3. Ve a la pestaña "Console"
4. Intenta enviar el formulario
5. Copia cualquier error que aparezca

## Para verificar si EmailJS está cargado:

En la consola del navegador, escribe:
```javascript
typeof emailjs
```

Debería mostrar: `"object"`

Si muestra `"undefined"`, EmailJS no se cargó correctamente.

