/* eslint-disable new-cap, no-undef */
'use strict';
var btnBanner = document.querySelector('.btn__banner');
var subscription = document.querySelector('.subscription');
var subscriptionBtns = document.querySelectorAll('.subscription__btn');

console.log(subscriptionBtns);

// Scroll
btnBanner.addEventListener('click', function () {
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
