document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector(".site-header").classList.toggle("menu-open");
});

window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      document.querySelector('.site-header').classList.remove('menu-open');
    }
  });
