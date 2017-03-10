'use strict';

$(document).ready(function(){

  $('.news-button').click(function(e) {
    // var logo = $(this).attr('data-logo');
    // var modal = $('#cliente-modal');
    // modal.find('.cliente-stats p').text(stats);
    e.preventDefault();
    $('#news-modal').modal();
  });

  $('#news-modal').on('shown.bs.modal', function () {
    // $('body').toggleClass('menu-opened');
    menuOpened = !menuOpened;
  });

  $('#news-modal').on('hidden.bs.modal', function () {
    // $('body').toggleClass('menu-opened');
    menuOpened = !menuOpened;
  });

})
