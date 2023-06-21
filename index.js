new Swiper('.useful__content-slider', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.useful__slider-button.swiper-button-next',
    prevEl: '.useful__slider-button.swiper-button-prev',
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
new Swiper('.usefulPage__slider', {
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  navigation: {
    nextEl: '.usefulPage__slider-button.swiper-button-next',
    prevEl: '.usefulPage__slider-button.swiper-button-prev',
  },
  pagination: {
    el: '.usefulPage__slider-pagination',
    clickable: true
  },
  spaceBetween: 0,
  breakpoints: {
    1400: {
      slidesPerView: 3,
    },
    1020: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
  }
})
AOS.init({
  duration: 1000,
});

const burgerBtn = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.header-mobile-nav');

burgerBtn.addEventListener('click', function() {
  burgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('active');
})

function showTabContent(tabIndex) {
  const tabButtons = document.querySelectorAll(".applying__tab-button");
  const tabItems = document.querySelectorAll(".applying__tab-content");

  for (let i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }

  for (let i = 0; i < tabItems.length; i++) {
    tabItems[i].classList.remove("active");
  }

  tabButtons[tabIndex].classList.add("active");
  tabItems[tabIndex].classList.add("active");
}

const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');
const modalContent = document.querySelector('.modal');

function toggleActiveModal() {
  modalContent.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
  document.documentElement.classList.toggle('no-scroll')
}

openModal.addEventListener('click', function() {
  toggleActiveModal();
})
closeModal.addEventListener('click', function() {
  toggleActiveModal()
})
