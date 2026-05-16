// Opcional: detectar cuando el usuario hace click en descargar
const btn = document.querySelector('.btn-download');

btn.addEventListener('click', () => {
  // Puedes cambiar el texto del botón mientras "carga"
  btn.textContent = 'Descargando...';

  setTimeout(() => {
    btn.textContent = 'Descargar APK';
  }, 3000);
});
