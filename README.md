# Estructura del proyecto

mi-app-descarga/
├── index.html       ← página principal con el botón de descarga
├── style.css        ← estilos
├── script.js        ← JS opcional (feedback al hacer click)
└── public/
    └── mi-app.apk   ← TU APK VA AQUÍ

## Cómo usar

1. Pon tu .apk dentro de la carpeta `public/`
2. En index.html el botón ya apunta a `public/mi-app.apk`
3. Sube todo el proyecto a GitHub
4. Conéctalo en vercel.com → "Import Project" → selecciona tu repo
5. Vercel lo despliega automáticamente

## Cambiar el nombre del APK

En index.html, busca esta línea:
  <a href="public/mi-app.apk" download="MiApp.apk" ...>

- `href="public/mi-app.apk"` → ruta del archivo en tu proyecto
- `download="MiApp.apk"`    → nombre que verá el usuario al descargar
