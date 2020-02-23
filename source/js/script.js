/* eslint-disable new-cap, no-undef */
'use strict';
var subscriptionBtns = document.querySelectorAll('.subscription__btn');
var subscriptionsLists = document.querySelectorAll('.subscription__list');
var anchors = document.querySelectorAll('a[href^="#"]');

// Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Anchors
anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    var href = anchor.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Add class "active" on subscription__btn and subscription__list
subscriptionBtns.forEach(function (subscriptionBtn, index) {
  subscriptionBtn.addEventListener('click', function () {
    // Tabs button
    subscriptionBtns.forEach(function (btn) {
      btn.classList.remove('subscription__btn--active');
    });
    subscriptionBtn.classList.add('subscription__btn--active');

    // Tabs content
    subscriptionsLists.forEach(function (list) {
      list.classList.remove('subscription__list--active');
    });
    subscriptionsLists[index].classList.add('subscription__list--active');
  });
});

// Phone validation
IMask(document.querySelector('#phone'), {mask: '+{7}(000)000-00-00'});

// Add slider review
var sliderReview = new Swiper('.slider--review', {
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.review-button-prev'
  },
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
    1100: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  }
});
