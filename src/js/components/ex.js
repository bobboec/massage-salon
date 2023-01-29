window.onload = function () {
  const headerElement = document.querySelector('.header');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      headerElement.classList.remove('_scroll');
    } else {
      headerElement.classList.add('_scroll');
    }
  };

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(headerElement);

  //  перемещение контактов в ul
  const contacts = document.querySelector('.header__contacts')
  const mobileMenu = document.querySelector('[data-menu]')
  const bigMenu = document.querySelector('.header__container')
  window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth <= 1024) {
      mobileMenu.appendChild(contacts)
    } else if (document.documentElement.clientWidth > 1024) {
      bigMenu.appendChild(contacts)

    }
  });



}
