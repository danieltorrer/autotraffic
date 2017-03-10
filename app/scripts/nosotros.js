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
    vertical: true
  });

})
