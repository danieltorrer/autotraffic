'use strict';

$(document).ready(function(){

  $('.carrousel').slick({
    //setting-name: setting-value
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    vertical: true,
    mobileFirst: true,
    appendArrows: $('.slide-vertical .arrows-container'),

    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          // centerMode: true,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: false,
          vertical: true,
          appendArrows: $('.slide-vertical .arrows-container')

        }
      },
    {
      breakpoint: 300,
      settings: {
        vertical: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: false,
        arrows:  true,
        appendArrows: $('.slide-vertical .arrows-container')
      }
    }
  ]
  });

})
