new Swiper('.useful__content-slider', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 0,
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  }
});

const burgerBtn = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.header-mobile-nav');

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})
