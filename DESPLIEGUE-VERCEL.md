# 🚀 Desplegar en Vercel - Ébano Mirador

## 📋 Requisitos Previos

1. ✅ Tener una cuenta en GitHub (gratis)
2. ✅ Tener una cuenta en Vercel (gratis)
3. ✅ Proyecto configurado y funcionando localmente

## 🔧 Opción 1: Desplegar desde GitHub (Recomendado)

### Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com y crea una cuenta (si no tienes)
2. Haz clic en "New repository"
3. Nombre: `ebano-mirador-website` (o el que prefieras)
4. Marca como **Público** o **Privado** (ambos funcionan)
5. **NO** marques "Initialize with README" (ya tenemos archivos)
6. Haz clic en "Create repository"

### Paso 2: Subir Código a GitHub

Abre la terminal en la carpeta del proyecto y ejecuta:

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit inicial
git commit -m "Initial commit - Ébano Mirador website"

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU_USUARIO/ebano-mirador-website.git

# Subir a GitHub
git branch -M main
git push -u origin main
```

**Nota:** Si GitHub te pide autenticación, usa un Personal Access Token en lugar de tu contraseña.

### Paso 3: Conectar con Vercel

1. Ve a https://vercel.com
2. Haz clic en "Sign Up" y elige "Continue with GitHub"
3. Autoriza a Vercel a acceder a tus repositorios
4. Haz clic en "Add New Project"
5. Selecciona el repositorio `ebano-mirador-website`
6. Vercel detectará automáticamente la configuración:
   - **Framework Preset:** Other
   - **Root Directory:** `./` (dejar por defecto)
   - **Build Command:** (dejar vacío - es un sitio estático)
   - **Output Directory:** (dejar vacío)
7. Haz clic en "Deploy"

### Paso 4: Configurar Dominio Personalizado (Opcional)

Después del despliegue:

1. Ve a tu proyecto en Vercel
2. Haz clic en "Settings" → "Domains"
3. Agrega tu dominio personalizado (ej: `ebano-mirador.com`)
4. Sigue las instrucciones para configurar DNS

## 🔧 Opción 2: Desplegar con Vercel CLI (Más Rápido)

### Paso 1: Instalar Vercel CLI

```bash
npm install -g vercel
```

### Paso 2: Iniciar Sesión

```bash
vercel login
```

Esto abrirá tu navegador para autenticarte.

### Paso 3: Desplegar

Desde la carpeta del proyecto:

```bash
vercel
```

Sigue las instrucciones:
- **Set up and deploy?** → `Y`
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → `N` (primera vez)
- **What's your project's name?** → `ebano-mirador-website`
- **In which directory is your code located?** → `./` (Enter)

### Paso 4: Desplegar a Producción

```bash
vercel --prod
```

## 📝 Configuración Adicional

### Variables de Entorno (Si las necesitas)

Si más adelante necesitas variables de entorno:

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Configuración de Build (No necesaria para sitio estático)

Para un sitio estático como este, Vercel no necesita configuración especial. Si quieres personalizar, crea `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

## 🔄 Actualizaciones Futuras

Cada vez que hagas cambios:

### Si usas GitHub:
1. Haz `git add .`
2. `git commit -m "Descripción del cambio"`
3. `git push`
4. Vercel desplegará automáticamente

### Si usas CLI:
```bash
vercel --prod
```

## ✅ Verificar Despliegue

Después del despliegue, Vercel te dará una URL como:
- `https://ebano-mirador-website.vercel.app`

Abre esa URL y verifica:
- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se ven
- [ ] El formulario funciona
- [ ] Los links funcionan
- [ ] Es responsive en mobile

## 🐛 Solución de Problemas

### Error: "Build Failed"
- Verifica que todos los archivos estén en el repositorio
- Asegúrate de que `index.html` esté en la raíz

### Las imágenes no cargan
- Verifica que las rutas de las imágenes sean correctas
- Asegúrate de que todas las imágenes estén en el repositorio

### El formulario no funciona
- Verifica que hayas configurado el Formspree ID en `script.js`
- Revisa la consola del navegador para errores

## 📞 Soporte

- Documentación de Vercel: https://vercel.com/docs
- Comunidad: https://github.com/vercel/vercel/discussions

---

**¡Listo!** Tu sitio estará en línea en menos de 2 minutos. 🎉

