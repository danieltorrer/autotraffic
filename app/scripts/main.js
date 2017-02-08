'use strict';

$(document).ready(function(){

	$(".menu-btn a").click( function(){
		$(this).toggleClass('menu-btn-back');
		$('nav').toggleClass('hide');
		$('body').toggleClass('menu-opened');
	});

});
