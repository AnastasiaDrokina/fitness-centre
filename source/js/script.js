/* eslint-disable new-cap, no-undef */
'use strict';
var btnBanner = document.querySelector('.btn--banner');
var subscription = document.querySelector('#subscription');
var subscriptionBtns = document.querySelectorAll('.subscription__btn');

// Scroll
btnBanner.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scrollBy({top: subscription.offsetTop - window.scrollY, behavior: 'smooth'});
});

// Add class "active" on subscription__btn
subscriptionBtns.forEach(function (subscriptionBtn) {
  subscriptionBtn.addEventListener('click', function () {
    subscriptionBtns.forEach(function (btn) {
      btn.classList.remove('subscription__btn--active');
    });
    subscriptionBtn.classList.add('subscription__btn--active');
  });
});

// Add slider trainer
var sliderTrainer = new Swiper ('.slider--trainer', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.trainer-button-next',
    prevEl: '.trainer-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

// Add slider review
var sliderReview = new Swiper ('.slider--review', {
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev'
  },
});

