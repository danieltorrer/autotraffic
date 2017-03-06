'use strict';

$(document).ready(function(){

  $('.carousel').slick({
    //setting-name: setting-value
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.cliente-button').click(function() {
    //$('body').toggleClass('menu-opened');
    $('#cliente-modal').modal();
  });

})
