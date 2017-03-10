'use strict';

$(document).ready(function(){

  $('.carousel').slick({
    //setting-name: setting-value
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: true,
    autoplay: true
  });

  $('.cliente-button').click(function() {
    //$('body').toggleClass('menu-opened');
    var logo = $(this).attr('data-logo');
    var name = $(this).attr('data-cliente-name');
    var solucion = $(this).attr('data-cliente-solucion');
    var periodo = $(this).attr('data-cliente-periodo');
    var stats = $(this).attr('data-cliente-stats');

    var modal = $('#cliente-modal');
    modal.find('.cliente-logo img').attr('src', logo);
    modal.find('.cliente-logo h3').text(name);
    modal.find('.cliente-solucion p').text(solucion);
    modal.find('.cliente-periodo p').text(periodo);
    modal.find('.cliente-stats p').text(stats);

    $('#cliente-modal').modal();
  });

})
