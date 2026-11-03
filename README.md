# Menú Semanal

Planificador de menús semanales y lista de compras según lo que hay en la nevera.
Todo se guarda en el navegador (localStorage); en Ajustes se exporta/importa en JSON.

## Archivos
- `menu-semanal.html`: fuente única (también es el Artifact de Claude).
- `node build.js` → genera `index.html` (versión instalable, con Tailwind y Lucide locales en `vendor/`).
- `manifest.json`, `sw.js`, `icon.png`: PWA (funciona sin conexión tras la primera carga).

## iPhone / iPad (GitHub Pages)
1. Crear un repositorio público en GitHub llamado `menu-semanal` y hacer `git push` de esta carpeta.
2. En el repo: Settings → Pages → Source: "Deploy from a branch", rama `main`, carpeta `/ (root)`.
3. Abrir `https://<usuario>.github.io/menu-semanal/` en Safari → Compartir → "Añadir a pantalla de inicio".

## Android
La carpeta `../menu-semanal-apk` empaqueta esta misma app con Capacitor (ver su README).
