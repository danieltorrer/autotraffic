'use strict';

var scrolling = false;
var position = $(window).scrollTop();
var currentSlide = 0;
var minSlide = 0;
var maxSlide = 3;

$(document).ready(function(){

	$('.movilidad-categoria').mouseenter(function(e){
		var categoria = $(e.target).attr('data-category');
		if(categoria == undefined) categoria = 1;
		//$('.zoom-image').not('[data-zoom="' + categoria +'"]').css({ 'z-index': 0});
		$('.zoom-image').removeClass('zoom-image-1 zoom-image-2 zoom-image-3').addClass('zoom-image-'+categoria);

	});



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
				processDown(1000);
			}

			// processDown(1000);

		}

		if( movements < 0){
			for(var i = movements ; i < 0; i++) {
				processUp(1000, false)
			}
			// processUp(1000, false)
		}

		e.preventDefault();
	});

	$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]').velocity({ translateY: '100%'}, {duration: 0});
	$('.scroll-body .slide[data-slide="'+ (currentSlide+2) +'"]').velocity({ translateY: '100%'}, {duration: 0});


	$(document).on('mousewheel DOMMouseScroll', function(e) {
		$('.nav-home li').removeClass('active');
		if(!scrolling && !menuOpened){

			if (e.deltaY > 0){
				//console.log('moving UP the page');
				processUp(1000, true);
			} else {
				//console.log('moving DOWN the page');
				processDown(1000);
			}
		}

	});


});

function processUp (duration, mouse) {
	$('.nav-home li').removeClass('active');


	if(currentSlide == maxSlide ){
		if(mouse && $(window).scrollTop() == 0 || !mouse)
			slideUpLast(duration);
	}else {

		if(currentSlide > minSlide && currentSlide != maxSlide){
			slideUp(duration);
		}
	}

}

function processDown (duration) {
	if(currentSlide <  maxSlide){

		if(currentSlide == maxSlide-1){
			slideDownLast(duration);

		} else {
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

function stopPlayScroll(e) {
	if (e) {
		$(document).on('mousewheel DOMMouseScroll', function(e) {
			preventDefault(e)
		});
		var t = $(document).scrollTop();
		$(document).on('scroll', function(e) {
			$(document).scrollTop(t),
			preventDefault(e)
		}),
		$(document).on('touchmove', function(e) {
			preventDefault(e)
		})
	} else
	$(document).off('mousewheel DOMMouseScroll'),
	$(document).unbind('scroll'),
	$(document).off('touchmove')
}

function mapValues(value, start1, stop1, start2, stop2) {
	return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}
