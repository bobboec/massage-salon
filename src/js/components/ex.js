window.onload = function () {
  const headerElement = document.querySelector('.header');
  const topBtn = document.querySelector('.hero__top-btn');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
      topBtn.classList.remove('_scroll');
      topBtn
    } else {
      headerElement.classList.add('_scroll');
      topBtn.classList.add('_scroll');
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

  //  перемещение контактов в ul
  const contacts = document.querySelector('.header__contacts')
  const mobileMenu = document.querySelector('[data-menu]')
  const bigMenu = document.querySelector('.header__container')
  var width = window.innerWidth;

  // Выполняем действие, если ширина меньше 1000px
  if (width <= 1096) {
    mobileMenu.appendChild(contacts)
  }

  window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth <= 1096) {
      mobileMenu.appendChild(contacts)
    } else if (document.documentElement.clientWidth > 1096) {
      bigMenu.appendChild(contacts)
    }
  });



}
