// Genera index.html (versión instalable: PWA para iOS/GitHub Pages y APK Android)
// a partir de menu-semanal.html (fuente única, también usada como Artifact de Claude).
const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, 'menu-semanal.html'), 'utf8');

const body = src
  .replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')
  .replace('https://cdn.tailwindcss.com/3.4.17', 'vendor/tailwind.js')
  .replace('https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js', 'vendor/lucide.min.js');

const head = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#2f7a5b">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Menú">
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon.png">
<link rel="icon" href="icon.png">
<style>
  :root { padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
  body { margin: 0; font-size: 14px; }
  img { max-width: 100%; }
  [hidden] { display: none !important; }
</style>
`;
const tail = `
<script>
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
</script>
</body>
</html>
`;
// Las etiquetas <title>, <link> y <style> de la fuente van en <head>; el resto en <body>.
const splitAt = body.indexOf('<header');
const headPart = body.slice(0, splitAt);
const bodyPart = body.slice(splitAt);
const out = head + headPart + '</head>\n<body>\n' + bodyPart + tail;
fs.writeFileSync(path.join(__dirname, 'index.html'), out);
console.log('index.html generado (' + out.length + ' bytes)');
