window.addEventListener('load', function () {
  alert('Cargado');

  var menuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');

  // menuButton.addEventListener(nombre del evento, callback)
  menuButton.addEventListener('click', miFuncion);

  function miFuncion() {
    mobileMenu.style.opacity = 1;
  }
});
