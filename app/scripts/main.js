'use strict';

var submenuOpened = false;
var menuOpened = false;


$(document).ready(function() {

  $('.menu-btn a').click( function(){
    //$(this).toggleClass('menu-btn-back');
    $('body').toggleClass('menu-opened');
    if(menuOpened){
      $('nav.menu-container').velocity({
        'translateY': '-130%'
      },{
        duration: 0,
        complete: function(){
          menuOpened = !menuOpened;
        }
      });
    }
    else {
      $('nav.menu-container').velocity({
        'translateY': '0%'
      },{
        duration: 300,
        easing: 'easeInSine',
        complete: function(){
          menuOpened = !menuOpened;
        }
      });
    }
    $('header svg').toggleClass('logo-vector');



  });

  $('.item-sub-menu').click(function(){
    if(submenuOpened){
      $(this).next().velocity('slideUp', {
        duration: 100
      });
    } else {
      $(this).next().velocity('slideDown', {
        duration: 100
      });
    }

    submenuOpened = !submenuOpened;
  });

});
