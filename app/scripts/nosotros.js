'use strict';

$(document).ready(function(){

  $('.carrousel').slick({
    //setting-name: setting-value
    infinite: true,
    slidesToShow: 1,
    // centerMode: true,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    vertical: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          slidesToShow: 1,
          // centerMode: true,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          autoplay: true,
          vertical: true
        }
      },
    {
      breakpoint: 300,
      settings: {
        vertical: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true
      }
    }
  ]
  });

})
