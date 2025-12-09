# 📝 Cómo Editar el Código y Actualizar el Sitio

## ✅ PROCESO SIMPLE (3 Pasos)

Cada vez que quieras hacer cambios:

1. **Editar** los archivos en tu computadora
2. **Subir** los cambios a GitHub
3. **Vercel actualiza automáticamente** tu sitio

---

## 📋 PASO A PASO DETALLADO

### Paso 1: Editar los Archivos

#### Opción A: Desde Cursor (Recomendado)
1. Abre Cursor
2. Abre la carpeta: `/Users/neuromindaiyoutubeus/Desktop/paginawebebano`
3. Edita los archivos que necesites:
   - `index.html` → Para cambiar contenido, textos, estructura
   - `style.css` → Para cambiar colores, tamaños, diseño
   - `script.js` → Para cambiar funcionalidades, animaciones
4. Guarda los cambios (Cmd + S)

#### Opción B: Desde GitHub (Más Limitado)
1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo que quieres editar
3. Haz clic en el ícono de lápiz (Edit)
4. Haz los cambios
5. Haz clic en "Commit changes"

---

### Paso 2: Subir los Cambios a GitHub

#### Desde la Terminal (Rápido)

Abre la terminal en Cursor y ejecuta estos comandos:

```bash
# 1. Ir a tu carpeta
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano

# 2. Ver qué archivos cambiaste
git status

# 3. Agregar todos los cambios
git add .

# 4. Guardar los cambios con un mensaje
git commit -m "Descripción de los cambios"

# 5. Subir a GitHub
git push
```

**Ejemplo:**
```bash
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
git add .
git commit -m "Actualizar texto del hero y cambiar colores"
git push
```

#### Desde GitHub Desktop (Más Visual)

1. Abre GitHub Desktop
2. Verás tus cambios en la lista
3. Escribe un mensaje de commit (ej: "Actualizar textos")
4. Haz clic en "Commit to main"
5. Haz clic en "Push origin"

---

### Paso 3: Vercel Actualiza Automáticamente

1. **Vercel detecta automáticamente** los cambios en GitHub
2. **Inicia un nuevo despliegue** (toma 1-2 minutos)
3. **Tu sitio se actualiza** con los nuevos cambios

**Puedes ver el progreso:**
- Ve a Vercel → Tu proyecto → "Deployments"
- Verás el nuevo despliegue en proceso
- Cuando termine, tu sitio estará actualizado

---

## 🎯 EJEMPLOS PRÁCTICOS

### Ejemplo 1: Cambiar un Texto

1. Abre `index.html` en Cursor
2. Busca el texto que quieres cambiar (Cmd + F)
3. Cambia el texto
4. Guarda (Cmd + S)
5. En la terminal:
   ```bash
   cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
   git add .
   git commit -m "Cambiar texto del hero"
   git push
   ```
6. Espera 1-2 minutos
7. Recarga tu sitio web → Verás el cambio

### Ejemplo 2: Cambiar un Color

1. Abre `style.css` en Cursor
2. Busca el color que quieres cambiar
3. Cambia el valor (ej: `#D4AF37` → `#FF0000`)
4. Guarda (Cmd + S)
5. En la terminal:
   ```bash
   cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
   git add .
   git commit -m "Cambiar color dorado a rojo"
   git push
   ```
6. Espera 1-2 minutos
7. Recarga tu sitio web → Verás el cambio

### Ejemplo 3: Agregar una Nueva Sección

1. Abre `index.html` en Cursor
2. Agrega el nuevo código HTML
3. Abre `style.css` y agrega los estilos
4. Guarda ambos archivos
5. En la terminal:
   ```bash
   cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
   git add .
   git commit -m "Agregar nueva sección de testimonios"
   git push
   ```
6. Espera 1-2 minutos
7. Recarga tu sitio web → Verás la nueva sección

---

## 🔄 FLUJO COMPLETO (Resumen)

```
1. Editar archivos en Cursor
   ↓
2. Guardar cambios (Cmd + S)
   ↓
3. Terminal: git add .
   ↓
4. Terminal: git commit -m "mensaje"
   ↓
5. Terminal: git push
   ↓
6. Vercel detecta cambios automáticamente
   ↓
7. Vercel despliega nueva versión (1-2 min)
   ↓
8. Tu sitio está actualizado ✅
```

---

## 💡 TIPS ÚTILES

### Ver Cambios Antes de Subir
```bash
# Ver qué archivos cambiaste
git status

# Ver los cambios específicos
git diff
```

### Deshacer Cambios (Si te equivocas)
```bash
# Deshacer cambios que NO has guardado todavía
git checkout -- nombre-del-archivo

# Deshacer el último commit (pero mantener los cambios)
git reset --soft HEAD~1
```

### Ver Historial de Cambios
```bash
# Ver todos los commits
git log --oneline
```

---

## 🆘 SI ALGO NO FUNCIONA

### "git push no funciona"
- Verifica que tengas internet
- Verifica que los cambios estén guardados
- Intenta de nuevo

### "Vercel no actualiza"
- Espera 2-3 minutos
- Ve a Vercel → Deployments y verifica que haya un nuevo despliegue
- Si no hay despliegue, verifica que el push a GitHub haya funcionado

### "No veo los cambios en el sitio"
- Limpia la caché del navegador (Cmd + Shift + R)
- Espera unos minutos más
- Verifica que el despliegue en Vercel haya terminado

---

## ✅ RESUMEN

**Para editar tu sitio:**
1. Edita archivos en Cursor
2. `git add .` → `git commit -m "mensaje"` → `git push`
3. Vercel actualiza automáticamente

**¡Es así de simple!** 🚀

---

**¿Necesitas ayuda con algún cambio específico?** Dime qué quieres cambiar y te guío paso a paso.


