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
}

openModal.addEventListener('click', function() {
  toggleActiveModal();
})
closeModal.addEventListener('click', function() {
  toggleActiveModal()
})