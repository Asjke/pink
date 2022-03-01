/* eslint-disable */
/* stylelint-disable */

const initSwiper = () => {
  const slider = document.querySelector('.reviews__slider-container');

  new Swiper(slider, {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
     pagination: {
      el: ".swiper-pagination",
    }
  });
};

export {initSwiper};
