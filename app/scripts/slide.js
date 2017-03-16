'use strict';

var scrolling = false;
var position = $(window).scrollTop();
var currentSlide = 0;
var minSlide = 0;
var maxSlide = 3;

$(document).ready(function(){

	$('body').addClass('no-scroll');

	$('.movilidad-categoria').mouseover(function(e){
		var categoria = $(this).attr('data-category');
		$('.zoom-image').addClass('hide-image');
		$('.zoom-image-' + categoria).removeClass('hide-image');
		// if(categoria == undefined) categoria = 1;
		//$('.zoom-image').not('[data-zoom="' + categoria +'"]').css({ 'z-index': 0});
		// $('.zoom-image').removeClass('zoom-image-1 zoom-image-2 zoom-image-3').addClass('zoom-image-'+categoria);

	});


	// click circulo de
	$('.nav-home li').click( function (e) {
		var targetSlide = $(this).attr('data-slide');
		$('.nav-home li').removeClass('active');
		//$(this).addClass('active');
		// target : 3
		// currentSlide 4
		var movements = targetSlide - currentSlide;
		var orientation;

		if( movements > 0){
			for(var i = 0; i < movements; i++){
				processDown(1200);
			}

			// processDown(1200);

		}

		if( movements < 0){
			for(var i = movements ; i < 0; i++) {
				processUp(1200, false)
			}
			// processUp(1200, false)
		}

		e.preventDefault();
	});

	$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]').velocity({ translateY: '100%'}, {duration: 0});
	$('.scroll-body .slide[data-slide="'+ (currentSlide+2) +'"]').velocity({ translateY: '100%'}, {duration: 0});


	$(document).on('mousewheel', function(e) {
		// $('.nav-home li').removeClass('active');
		if(!scrolling && !menuOpened){

			if (e.deltaY > 0){
				//console.log('moving UP the page');
				processUp(1200, true, e);
			} else {
				//console.log('moving DOWN the page');
				processDown(1200);
			}
		}

	});


});

function processUp (duration, mouse, e) {


	if(currentSlide == maxSlide ){
		var scrollTop = $(window).scrollTop();
		// e.preventDefault();

		if(scrollTop === 0 && mouse || !mouse ){
			$('.nav-home li').removeClass('active');
			slideUpLast(duration);
		}
	} else {

		if(currentSlide > minSlide && currentSlide != maxSlide){
			$('.nav-home li').removeClass('active');
			slideUp(duration);
		}
	}

}

function processDown (duration) {
	if(currentSlide <  maxSlide){

		if(currentSlide == maxSlide-1){
			$('.nav-home li').removeClass('active');
			slideDownLast(duration);

		} else {
			$('.nav-home li').removeClass('active');
			slideDown(duration);
		}
	}
}

function slideDownLast(duration) {
	currentSlide++;
	scrolling =  true;

	$('.relative-wrapper').removeClass('fixed');
	$('.relative-wrapper').velocity({
		'padding-top': '0vh'
	},{
		duration: duration,
		queue: false,
		easing: 'easeOutQuad',
		complete: function(){
			$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
			.velocity({ translateY: '100%'}, {duration: 0});
			postScrollSettings();
		}
	});
}

function slideUpLast(duration){
	currentSlide--;
	scrolling =  true;

	$('.relative-wrapper').velocity({
		'padding-top': '100%'
	}, {
		duration: duration,
		queue: false,
		easing: 'easeOutQuad',
		complete: function(){
			//$('.scroll-body .slide[data-slide="'+ (currentSlide) +'"]')
			//.velocity({ translateY: '0%'}, {duration: 0});
			//$('.relative-wrapper').addClass('fixed');
			$('.relative-wrapper').addClass('fixed');
			postScrollSettings();
		}
	})
}

function slideDown(duration){
	currentSlide++;
	scrolling =  true;

	$('.slide[data-slide="'+ currentSlide +'"]').velocity({
		translateY: '0%'
	},{
		duration: duration,
		queue: false,
		easing: 'easeOutQuad',
		complete: function(){
			$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
			.velocity({ translateY: '100%'}, {duration: 0});

			postScrollSettings();
		}
	});

}

function slideUp(duration){
	scrolling =  true;
	currentSlide--;

	$('.slide[data-slide="'+ (currentSlide+1) +'"]').velocity({
		translateY: '100%'
	},{
		duration: duration,
		queue: false,
		easing: 'easeOutQuad',
		complete: function(){
			postScrollSettings();
		}
	});
	// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]')
	// .velocity({ translateY: '100%'}, {duration: 0}});
	//
}


function postScrollSettings(){
	scrolling = false;

	$('.nav-home li[data-slide="' + (currentSlide)  +'"]').addClass('active');


	if(currentSlide == maxSlide){
		$(window).scrollTop(0);
		$('body').removeClass('no-scroll');
		$('.slide[data-slide="'+ (currentSlide) +'"]').css({position: 'relative'})
	}

	else {
		$('body').addClass('no-scroll');
	}
}
