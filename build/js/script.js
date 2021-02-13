'use strict';
/*
var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
*/
$(document).ready(function () {
  $('.portfolio__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    centerPadding: '13%',
    // variableWidth: true,
    /*   autoplay: true,
       autoplaySpeed: 3000*/
  });
});

$(document).ready(function () {
  $('.partners__slider').slick({
    slidesToShow: 4,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      /* {
         breakpoint: 1110,
         settings: {
           slidesToShow: 2,
         },
       },*/
    ],
  });
});
