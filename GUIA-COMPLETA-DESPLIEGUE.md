# 🚀 Guía Completa: Comprar Dominio y Desplegar en Vercel

## ✅ Verificación de Responsive

Tu sitio está optimizado para:
- ✅ **Mobile:** 320px - 767px
- ✅ **Tablet:** 768px - 1023px  
- ✅ **Desktop:** 1024px+
- ✅ **Viewport configurado correctamente**
- ✅ **Sin overflow horizontal**
- ✅ **Touch-friendly (botones mín. 48px)**

---

## 📋 PARTE 1: COMPRAR DOMINIO

### Opción Recomendada: Namecheap (Más Barato y Fácil)

#### Paso 1: Crear Cuenta
1. Ve a: **https://www.namecheap.com**
2. Haz clic en "Sign Up" (Registrarse)
3. Completa el formulario con tu email
4. Verifica tu email

#### Paso 2: Buscar y Comprar Dominio
1. En la página principal, busca un dominio:
   - Ejemplos: `ebanomirador.com`, `ebanomirador.co`, `miradorebano.com`
2. Haz clic en "Search" (Buscar)
3. Verás los precios (generalmente $10-15 USD/año para .com)
4. Selecciona el dominio que quieras
5. Haz clic en "Add to Cart" (Agregar al carrito)
6. Revisa el carrito y haz clic en "Checkout" (Pagar)
7. Completa el pago (tarjeta de crédito o PayPal)

#### Paso 3: Configurar Dominio (Después de comprar)
1. En tu cuenta de Namecheap, ve a "Domain List"
2. Encuentra tu dominio y haz clic en "Manage"
3. **NO cambies nada todavía** - Lo haremos después de desplegar en Vercel

---

## 📋 PARTE 2: DESPLEGAR EN VERCEL (Paso a Paso)

### Método 1: Desde GitHub (Recomendado - Más Fácil)

#### Paso 1: Crear Cuenta en GitHub
1. Ve a: **https://github.com**
2. Haz clic en "Sign up" (Registrarse)
3. Crea una cuenta (es gratis)
4. Verifica tu email

#### Paso 2: Crear Repositorio
1. En GitHub, haz clic en el botón verde "New" (o el ícono +)
2. Nombre del repositorio: `ebano-mirador-website` (o el que prefieras)
3. Marca como **Público** (Public) - es gratis
4. **NO marques** "Add a README file"
5. Haz clic en "Create repository"

#### Paso 3: Subir Tu Código a GitHub

**Opción A: Desde la Terminal (Si estás cómodo)**
1. Abre la terminal en Cursor (Ctrl + `)
2. Copia y pega estos comandos uno por uno:

```bash
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
git init
git add .
git commit -m "Sitio web Ébano Mirador"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/ebano-mirador-website.git
git push -u origin main
```

**⚠️ IMPORTANTE:** Reemplaza `TU_USUARIO` con tu usuario de GitHub

**Si te pide usuario y contraseña:**
- Usuario: Tu usuario de GitHub
- Contraseña: Usa un "Personal Access Token" (ver abajo cómo crearlo)

**Opción B: Usando GitHub Desktop (Más Fácil)**
1. Descarga GitHub Desktop: **https://desktop.github.com**
2. Instálalo y ábrelo
3. Inicia sesión con tu cuenta de GitHub
4. Haz clic en "File" → "Add Local Repository"
5. Selecciona la carpeta: `/Users/neuromindaiyoutubeus/Desktop/paginawebebano`
6. Haz clic en "Publish repository"
7. Marca "Keep this code private" si quieres (o déjalo público)
8. Haz clic en "Publish repository"

#### Paso 4: Crear Personal Access Token (Si usas terminal)
1. En GitHub, ve a tu perfil (arriba derecha) → "Settings"
2. En el menú izquierdo, ve a "Developer settings"
3. Haz clic en "Personal access tokens" → "Tokens (classic)"
4. Haz clic en "Generate new token" → "Generate new token (classic)"
5. Dale un nombre: "Vercel Deployment"
6. Selecciona el scope: **repo** (marca la casilla)
7. Haz clic en "Generate token"
8. **COPIA EL TOKEN** (solo lo verás una vez)
9. Úsalo como contraseña cuando GitHub te la pida

#### Paso 5: Conectar con Vercel
1. Ve a: **https://vercel.com**
2. Haz clic en "Sign Up" (Registrarse)
3. Selecciona "Continue with GitHub"
4. Autoriza a Vercel a acceder a tus repositorios
5. Haz clic en "Add New Project" (Agregar Nuevo Proyecto)
6. Selecciona el repositorio `ebano-mirador-website`
7. Vercel detectará automáticamente la configuración:
   - **Framework Preset:** Other (o deja en blanco)
   - **Root Directory:** `./` (deja así)
   - **Build Command:** (déjalo vacío)
   - **Output Directory:** (déjalo vacío)
8. Haz clic en "Deploy" (Desplegar)

#### Paso 6: Esperar el Despliegue
- Vercel desplegará tu sitio (toma 1-2 minutos)
- Verás una URL temporal como: `ebano-mirador-website.vercel.app`
- **¡Tu sitio ya está en línea!** 🎉

---

### Método 2: Desde Vercel CLI (Alternativa Rápida)

Si prefieres no usar GitHub:

#### Paso 1: Instalar Vercel CLI
1. Abre la terminal en Cursor
2. Copia y pega:

```bash
npm install -g vercel
```

#### Paso 2: Iniciar Sesión
```bash
vercel login
```
- Esto abrirá tu navegador para autenticarte

#### Paso 3: Desplegar
```bash
cd /Users/neuromindaiyoutubeus/Desktop/paginawebebano
vercel
```

Sigue las instrucciones:
- **Set up and deploy?** → Escribe `Y` y presiona Enter
- **Which scope?** → Selecciona tu cuenta
- **Link to existing project?** → Escribe `N` y presiona Enter
- **What's your project's name?** → Escribe `ebano-mirador` y presiona Enter
- **In which directory is your code located?** → Presiona Enter (usa `./`)

#### Paso 4: Desplegar a Producción
```bash
vercel --prod
```

---

## 📋 PARTE 3: CONECTAR TU DOMINIO CON VERCEL

### Paso 1: Obtener DNS de Vercel
1. En Vercel, ve a tu proyecto
2. Haz clic en "Settings" (Configuración)
3. Ve a "Domains" (Dominios)
4. Escribe tu dominio (ej: `ebanomirador.com`)
5. Haz clic en "Add"
6. Vercel te dará instrucciones de DNS

### Paso 2: Configurar DNS en Namecheap
1. En Namecheap, ve a "Domain List"
2. Haz clic en "Manage" junto a tu dominio
3. Ve a la pestaña "Advanced DNS"
4. Haz clic en "Add New Record"
5. Agrega estos registros (Vercel te dirá los valores exactos):

**Registro A:**
- Type: A Record
- Host: @
- Value: `76.76.21.21` (o el que Vercel te indique)
- TTL: Automatic

**Registro CNAME:**
- Type: CNAME Record
- Host: www
- Value: `cname.vercel-dns.com` (o el que Vercel te indique)
- TTL: Automatic

6. Guarda los cambios

### Paso 3: Esperar Propagación
- Los cambios DNS pueden tardar 24-48 horas
- Generalmente funciona en 1-2 horas
- Vercel te notificará cuando esté listo

---

## ✅ CHECKLIST FINAL

Antes de desplegar, verifica:

- [ ] Todas las imágenes están en las carpetas correctas
- [ ] El formulario tiene EmailJS configurado
- [ ] Google Maps tiene el link correcto
- [ ] Todos los links de redes sociales funcionan
- [ ] El sitio se ve bien en tu teléfono
- [ ] El sitio se ve bien en tu computadora

---

## 🆘 PROBLEMAS COMUNES

### "Error al subir a GitHub"
- Verifica que tengas Git instalado
- Usa GitHub Desktop si es más fácil

### "Vercel no encuentra el proyecto"
- Asegúrate de que el repositorio esté en GitHub
- Verifica que el nombre del repositorio sea correcto

### "El dominio no funciona"
- Espera 24-48 horas para propagación DNS
- Verifica que los registros DNS sean correctos
- Contacta a Vercel support si persiste

### "Las imágenes no cargan"
- Verifica que todas las imágenes estén en el repositorio
- Revisa las rutas en el código

---

## 📞 SOPORTE

- **Vercel Support:** https://vercel.com/support
- **Namecheap Support:** https://www.namecheap.com/support/
- **GitHub Support:** https://github.com/support

---

## 🎉 ¡LISTO!

Una vez completados estos pasos, tu sitio estará en línea con tu dominio personalizado.

**URL final:** `https://ebanomirador.com` (o el dominio que elijas)

---

**¿Necesitas ayuda con algún paso?** Dime en qué paso estás y te ayudo específicamente. 🚀

