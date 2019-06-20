window.addEventListener('load', function () {
  var menuButton = document.getElementById('mobile-menu-button');
  var mobileMenu = document.getElementById('mobile-menu');

  // menuButton.addEventListener(nombre del evento, callback)
  menuButton.addEventListener('click', toggleMenu);

  function toggleMenu() {
    // devuelve true o false si la clase visible existe o no respectivamente
    var isVisible = mobileMenu.classList.contains('visible');

    if (isVisible) {
      mobileMenu.classList.remove('visible');
      mobileMenu.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('visible');
    }
  }
});
