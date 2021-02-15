'use strict';
var pageHeader = document.querySelector('.header');
var headerToggle = document.querySelector('.header__nav-toggle');

pageHeader.classList.remove('header--no-js');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    pageHeader.classList.remove('header--closed');
    pageHeader.classList.add('header--open');
  } else {
    pageHeader.classList.add('header--closed');
    pageHeader.classList.remove('header--open');
  }
});
$(document).ready(function () {
  $('.portfolio__slider').slick({
    centerMode: true,
    slidesToShow: 1,
    speed: 1000,
    easing: 'ease',
    infinite: true,
    centerPadding: '13%',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
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
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
