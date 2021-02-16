'use strict';
var pageHeader = document.querySelector('.header');
var headerToggle = pageHeader.querySelector('.header__nav-toggle');
var body = document.querySelector('body');

pageHeader.classList.remove('header--no-js');
pageHeader.classList.add('header--closed');

function closeHeader() {
  pageHeader.classList.add('header--closed');
  pageHeader.classList.remove('header--open');
  body.classList.remove('overflow');
}

function openHeader() {
  pageHeader.classList.remove('header--closed');
  pageHeader.classList.add('header--open');
  body.classList.add('overflow');
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
