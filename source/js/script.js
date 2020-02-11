/* eslint-disable new-cap, no-undef */
'use strict';
var btnBanner = document.querySelector('.btn__banner');
var subscription = document.querySelector('.subscription');

btnBanner.addEventListener('click', function () {
  window.scrollBy({top: subscription.offsetTop - window.scrollY, behavior: 'smooth'});
});
