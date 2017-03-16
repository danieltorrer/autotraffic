'use strict';

var submenuOpened = false;
var menuOpened = false;


$(document).ready(function() {
  $('nav.menu-container').velocity({'translateY': '-130%'},{duration: 0});

  $('.menu-btn a').click( function(){
    //$(this).toggleClass('menu-btn-back');
    $('body').toggleClass('menu-opened')
    if(menuOpened){
      $('nav.menu-container').velocity({
        'translateY': '-130%'
      },{
        duration: 0,
        complete: function(){
          menuOpened = !menuOpened;
          $('header svg.logo-colors').toggleClass('logo-vector');
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
          $('header svg.logo-colors').toggleClass('logo-vector');
        }
      });
    }



  });

  $('.item-sub-menu').click(function(){
    var a = $(this);
    if(submenuOpened){
      $(this).next().velocity('slideUp', {
        duration: 100
      });

    } else {
      $(a).parent().find('ul li.menu-item').velocity('transition.flipXIn', {
          stagger: 70,
          duration: 600
      });
      $(this).next().velocity('slideDown', {
        duration: 100,
      });
    }

    submenuOpened = !submenuOpened;
  });

});
