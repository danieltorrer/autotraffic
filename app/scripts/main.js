'use strict';

$(document).ready(function(){

	$('.menu-btn a').click( function(){
		$(this).toggleClass('menu-btn-back');
		$('nav').toggleClass('hide');
		$('body').toggleClass('menu-opened');
	});

	$('.nav-home li').click( function (e) {
		skrollr.decks.animateTo( $(this).attr('data-href') );
		$('.nav-home li').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
