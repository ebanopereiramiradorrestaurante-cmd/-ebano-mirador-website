# 🚀 Paso a Paso: Desplegar en Vercel (Guía Activa)

## ✅ PASO 1: CREAR CUENTA EN GITHUB

### 1.1 Ir a GitHub
1. Abre tu navegador
2. Ve a: **https://github.com**
3. Haz clic en el botón verde **"Sign up"** (arriba derecha)

### 1.2 Crear la Cuenta
1. Ingresa tu **email** (el mismo que usaste para Namecheap está bien)
2. Crea una **contraseña segura** (guárdala bien)
3. Elige un **username** (ej: `ebanomirador` o `tu-nombre`)
4. Resuelve el captcha si aparece
5. Haz clic en **"Create account"**

### 1.3 Verificar Email
1. Revisa tu email
2. Abre el correo de GitHub
3. Haz clic en el link de verificación
4. ✅ **Cuenta creada**

---

## ✅ PASO 2: CREAR REPOSITORIO EN GITHUB

### 2.1 Crear Nuevo Repositorio
1. En GitHub, haz clic en el ícono **"+"** (arriba derecha)
2. Selecciona **"New repository"**

### 2.2 Configurar el Repositorio
1. **Repository name:** Escribe `ebano-mirador-website` (o el nombre que prefieras)
2. **Description:** (opcional) "Sitio web Ébano Mirador"
3. **Visibility:** Selecciona **"Public"** (es gratis y necesario para Vercel)
4. **NO marques** "Add a README file"
5. **NO marques** "Add .gitignore"
6. **NO marques** "Choose a license"
7. Haz clic en el botón verde **"Create repository"**

### 2.3 ¡Listo!
- Verás una página con instrucciones
- **NO hagas nada todavía**, solo déjala abierta

---

## ✅ PASO 3: SUBIR TU CÓDIGO A GITHUB

### Opción A: Usando GitHub Desktop (MÁS FÁCIL - RECOMENDADO)

#### 3.1 Descargar GitHub Desktop
1. Ve a: **https://desktop.github.com**
2. Haz clic en **"Download for macOS"**
3. Descarga e instala la aplicación

#### 3.2 Abrir GitHub Desktop
1. Abre la aplicación **GitHub Desktop**
2. Haz clic en **"Sign in to GitHub.com"**
3. Inicia sesión con tu cuenta de GitHub
4. Autoriza la aplicación

#### 3.3 Agregar Tu Proyecto
1. En GitHub Desktop, haz clic en **"File"** (menú superior)
2. Selecciona **"Add Local Repository"**
3. Haz clic en **"Choose..."**
4. Navega y selecciona la carpeta: `/Users/neuromindaiyoutubeus/Desktop/paginawebebano`
5. Haz clic en **"Add Repository"**

#### 3.4 Publicar el Repositorio
1. En GitHub Desktop, verás tu código
2. En la parte inferior, verás un botón **"Publish repository"**
3. Haz clic en **"Publish repository"**
4. **Nombre:** `ebano-mirador-website` (o el que elegiste)
5. **Descripción:** (opcional) "Sitio web Ébano Mirador"
6. **Marca la casilla** "Keep this code private" si quieres (o déjala sin marcar)
7. Haz clic en **"Publish repository"**

#### 3.5 Esperar
- Verás un mensaje "Publishing repository..."
- Cuando termine, verás "Published" ✅

---

### Opción B: Desde la Terminal (ALTERNATIVA)

Si prefieres usar la terminal, avísame y te guío paso a paso.

---

## ✅ PASO 4: CREAR CUENTA EN VERCEL

### 4.1 Ir a Vercel
1. Abre tu navegador
2. Ve a: **https://vercel.com**
3. Haz clic en **"Sign Up"** (arriba derecha)

### 4.2 Iniciar Sesión con GitHub
1. Haz clic en **"Continue with GitHub"**
2. Autoriza a Vercel a acceder a tu cuenta de GitHub
3. Haz clic en **"Authorize vercel"** (o similar)

### 4.3 Completar Perfil
1. Si te pide completar tu perfil:
   - Nombre: (opcional)
   - Email: (ya debería estar)
2. Haz clic en **"Continue"** o **"Skip"**

### 4.4 ¡Cuenta Creada!
- Verás el dashboard de Vercel
- ✅ **Listo para desplegar**

---

## ✅ PASO 5: DESPLEGAR TU SITIO EN VERCEL

### 5.1 Crear Nuevo Proyecto
1. En Vercel, haz clic en el botón **"Add New..."** (arriba derecha)
2. O haz clic en **"Add New Project"**

### 5.2 Importar Repositorio
1. Verás una lista de tus repositorios de GitHub
2. Busca **"ebano-mirador-website"** (o el nombre que elegiste)
3. Haz clic en **"Import"** junto a tu repositorio

### 5.3 Configurar el Proyecto
1. **Project Name:** `ebano-mirador` (o déjalo como está)
2. **Framework Preset:** Déjalo en **"Other"** o **"No Framework"**
3. **Root Directory:** Déjalo en `./` (punto y barra)
4. **Build Command:** Déjalo vacío
5. **Output Directory:** Déjalo vacío
6. **Install Command:** Déjalo vacío

### 5.4 Desplegar
1. Haz clic en el botón azul **"Deploy"**
2. Espera 1-2 minutos mientras Vercel despliega tu sitio

### 5.5 ¡Desplegado!
- Verás un mensaje **"Congratulations!"**
- Tu sitio estará en: `ebano-mirador.vercel.app` (o similar)
- Haz clic en el link para ver tu sitio en línea 🎉

---

## ✅ PASO 6: CONECTAR TU DOMINIO CON VERCEL

### 6.1 Ir a Configuración de Dominios
1. En Vercel, en tu proyecto, haz clic en **"Settings"** (arriba)
2. En el menú lateral, haz clic en **"Domains"**

### 6.2 Agregar Tu Dominio
1. En el campo de texto, escribe tu dominio:
   - Ejemplo: `ebanomirador.com` (sin www)
2. Haz clic en **"Add"**

### 6.3 Ver Instrucciones de DNS
1. Vercel te mostrará instrucciones de DNS
2. Te dirá qué registros agregar en Namecheap
3. **Anota estos valores** (o déjalo abierto)

---

## ✅ PASO 7: CONFIGURAR DNS EN NAMECHEAP

### 7.1 Ir a Namecheap
1. Ve a: **https://www.namecheap.com**
2. Inicia sesión
3. Ve a **"Domain List"** (menú superior)

### 7.2 Gestionar Tu Dominio
1. Encuentra tu dominio en la lista
2. Haz clic en el botón **"Manage"** (a la derecha)

### 7.3 Ir a DNS Avanzado
1. Ve a la pestaña **"Advanced DNS"** (arriba)
2. Scroll hacia abajo hasta **"Host Records"**

### 7.4 Agregar Registros DNS

**Registro A (para el dominio principal):**
1. Haz clic en **"Add New Record"**
2. **Type:** Selecciona **"A Record"**
3. **Host:** Escribe `@`
4. **Value:** Copia el valor que Vercel te dio (ej: `76.76.21.21`)
5. **TTL:** Déjalo en **"Automatic"**
6. Haz clic en el ícono de **checkmark** (✓) para guardar

**Registro CNAME (para www):**
1. Haz clic en **"Add New Record"**
2. **Type:** Selecciona **"CNAME Record"**
3. **Host:** Escribe `www`
4. **Value:** Copia el valor que Vercel te dio (ej: `cname.vercel-dns.com`)
5. **TTL:** Déjalo en **"Automatic"**
6. Haz clic en el ícono de **checkmark** (✓) para guardar

### 7.5 Esperar Propagación
- Los cambios DNS pueden tardar **1-48 horas**
- Generalmente funciona en **1-2 horas**
- Vercel te notificará cuando esté listo

---

## ✅ PASO 8: VERIFICAR QUE TODO FUNCIONA

### 8.1 Verificar en Vercel
1. En Vercel → Settings → Domains
2. Verás el estado de tu dominio
3. Cuando diga **"Valid Configuration"** = ✅ Listo

### 8.2 Probar Tu Sitio
1. Abre una nueva pestaña
2. Ve a: `https://tu-dominio.com`
3. Deberías ver tu sitio funcionando 🎉

---

## 🆘 SI ALGO NO FUNCIONA

### Problema: "No puedo publicar en GitHub Desktop"
- Verifica que tengas internet
- Cierra y vuelve a abrir GitHub Desktop
- Intenta de nuevo

### Problema: "Vercel no encuentra mi repositorio"
- Verifica que el repositorio esté en **"Public"**
- Refresca la página de Vercel
- Intenta importar de nuevo

### Problema: "El dominio no funciona"
- Espera 1-2 horas (propagación DNS)
- Verifica que los registros DNS sean correctos
- En Vercel, verifica el estado del dominio

---

## 📞 ¿NECESITAS AYUDA?

Dime en qué paso estás y qué problema tienes, y te ayudo específicamente.

---

**¡Vamos paso a paso! Dime cuando estés listo para empezar.** 🚀

