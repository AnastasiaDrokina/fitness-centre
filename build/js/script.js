/* eslint-disable new-cap, no-undef */
'use strict';
var btnBanner = document.querySelector('.btn--banner');
var subscription = document.querySelector('#subscription');
var subscriptionBtns = document.querySelectorAll('.subscription__btn');
var subscriptionsLists = document.querySelectorAll('.subscription__list');

// Scroll
btnBanner.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scrollBy(0, subscription.offsetTop - window.scrollY);
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
var sliderTrainer = new Swiper('.slider--trainer', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.trainer-button-next',
    prevEl: '.trainer-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  }
});

// Add slider review
var sliderReview = new Swiper('.slider--review', {
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev'
  },
});

// Add tabs subscription
subscriptionBtns.forEach(function (btn, index) {
  btn.addEventListener('click', function () {
    subscriptionsLists.forEach(function (list) {
      list.classList.remove('subscription__list--active');
    });

    subscriptionsLists[index].classList.add('subscription__list--active');
  });
});

// Валидация для телефона
IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});
