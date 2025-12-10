# ✅ Cambios de `vh` a `dvh` Aplicados

## Resumen
Se actualizaron todas las unidades de altura de viewport de `vh` (viewport height) a `dvh` (dynamic viewport height) para mejorar la experiencia en dispositivos móviles.

## Cambios Realizados

### 1. Menú de Navegación Móvil
**Archivo:** `style.css` (líneas 152-153)
```css
.nav-menu {
    height: 100vh; /* Fallback para navegadores antiguos */
    height: 100dvh; /* Dynamic viewport height - mejor para móviles */
}
```

### 2. Sección Hero
**Archivo:** `style.css` (líneas 247-248)
```css
.hero {
    height: 100vh; /* Fallback para navegadores antiguos */
    height: 100dvh; /* Dynamic viewport height - mejor para móviles */
}
```

### 3. Modal de Formulario
**Archivo:** `style.css` (líneas 1404-1405)
```css
.modal-content {
    max-height: 90vh; /* Fallback para navegadores antiguos */
    max-height: 90dvh; /* Dynamic viewport height - mejor para móviles */
}
```

### 4. Lightbox de Imágenes
**Archivo:** `style.css` (líneas 1711-1712)
```css
.lightbox-image {
    max-height: 90vh; /* Fallback para navegadores antiguos */
    max-height: 90dvh; /* Dynamic viewport height - mejor para móviles */
}
```

## Beneficios

### ✅ Mejor Experiencia en Móviles
- `dvh` se ajusta automáticamente cuando aparecen/desaparecen las barras del navegador
- El contenido siempre ocupa el espacio visible real
- No hay scroll innecesario o espacios vacíos

### ✅ Compatibilidad
- Fallback a `vh` para navegadores antiguos que no soportan `dvh`
- Los navegadores modernos usarán automáticamente `dvh`
- Sin pérdida de funcionalidad en navegadores antiguos

## Navegadores que Soportan `dvh`

✅ **Soportado en:**
- Chrome 108+
- Edge 108+
- Safari 15.4+
- Firefox 101+
- Opera 94+

⚠️ **Fallback automático a `vh` en:**
- Navegadores más antiguos

## Verificación

Para verificar que los cambios funcionan:

1. **Abrir el sitio en un dispositivo móvil**
2. **Abrir/cerrar el teclado** (en formularios)
3. **Verificar que el contenido se ajusta** correctamente
4. **Probar el menú móvil** - debe ocupar toda la altura visible
5. **Probar el modal** - debe ajustarse cuando aparece el teclado

## Estado

✅ **Cambios aplicados**
✅ **Fallbacks configurados**
✅ **Sin errores de sintaxis**
✅ **Listo para producción**
