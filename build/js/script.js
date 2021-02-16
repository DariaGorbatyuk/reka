'use strict';
var pageHeader = document.querySelector('.header');
var headerToggle = pageHeader.querySelector('.header__nav-toggle');
var html = document.querySelector('html');
var menu = pageHeader.querySelector('.header__top');

pageHeader.classList.remove('header--no-js');
pageHeader.classList.add('header--closed');

function closeHeader() {
  pageHeader.classList.add('header--closed');
  pageHeader.classList.remove('header--open');
  html.classList.remove('overflow');
}

function openHeader() {
  pageHeader.classList.remove('header--closed');
  pageHeader.classList.add('header--open');
  html.classList.add('overflow');
}

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('header--closed')) {
    openHeader();
  } else {
    closeHeader();
  }
});
pageHeader.addEventListener('click', function (evt) {
  if (pageHeader.classList.contains('header--closed') || !evt.target.classList.contains('header__nav-link')) {
    return;
  }
  closeHeader();
});

function onScroll() {
  if (window.pageYOffset < 90) {
    menu.classList.remove('header__top--slider-white');
    menu.classList.remove('header__top--slider-dark');
  }
  if (window.pageYOffset > 90 && window.pageYOffset < 700) {
    menu.classList.remove('header__top--slider-white');
    menu.classList.add('header__top--slider-dark');

  } else if (window.pageYOffset > 700) {
    menu.classList.remove('header__top--slider-dark');
    menu.classList.add('header__top--slider-white');
  }
}

window.addEventListener('scroll', onScroll);

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
