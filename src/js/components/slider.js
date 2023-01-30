import Swiper from 'swiper';
const swiper = new Swiper('.feedback__list', {
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 1

    },
    // desktop >= 991
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 3,
      spaceBetween: 20,

    }
  }
});
