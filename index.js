new Swiper('.useful__content-slider', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 0,
    },
    768: {
      spaceBetween: 60,
    },
    500: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    320: {
      spaceBetween: 15,
      slidesPerView: 2,
    }
    
  }
});
