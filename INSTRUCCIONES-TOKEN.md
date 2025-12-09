# 🔑 Crear Personal Access Token para GitHub

## Paso a Paso:

### 1. Ir a GitHub Settings
1. En GitHub, haz clic en tu **foto de perfil** (arriba derecha)
2. Haz clic en **"Settings"**

### 2. Ir a Developer Settings
1. En el menú lateral izquierdo, scroll hacia abajo
2. Haz clic en **"Developer settings"** (al final)

### 3. Crear Personal Access Token
1. Haz clic en **"Personal access tokens"**
2. Haz clic en **"Tokens (classic)"**
3. Haz clic en **"Generate new token"**
4. Selecciona **"Generate new token (classic)"**

### 4. Configurar el Token
1. **Note:** Escribe `Vercel Deployment` (o cualquier nombre)
2. **Expiration:** Selecciona **"90 days"** (o el tiempo que prefieras)
3. **Select scopes:** Marca la casilla **"repo"** (esto dará acceso completo a repositorios)
4. Scroll hacia abajo y haz clic en **"Generate token"**

### 5. Copiar el Token
1. **⚠️ IMPORTANTE:** Copia el token inmediatamente (solo lo verás una vez)
2. Se verá algo como: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
3. **Guárdalo en un lugar seguro**

### 6. Usar el Token
- Cuando hagas `git push`, te pedirá:
  - **Username:** Tu usuario de GitHub
  - **Password:** Pega el token (NO tu contraseña de GitHub)

---

**Una vez que tengas el token, avísame y continuamos con el push.** 🚀

