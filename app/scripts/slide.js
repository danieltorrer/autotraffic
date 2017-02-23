'use strict';

var scrolling = false;
var position = $(window).scrollTop();
var currentSlide = 0;
var minSlide = 0;
var maxSlide = 3;

$(document).ready(function(){

	$('.movilidad-categoria').mouseenter(function(e){
		var categoria = $(e.target).attr('data-category');
		//$('.zoom-image').not('[data-zoom="' + categoria +'"]').css({ 'z-index': 0});
		$('.zoom-image').removeClass('zoom-image-1 zoom-image-2 zoom-image-3').addClass('zoom-image-'+categoria);

	});



	$('.nav-home li').click( function (e) {
		skrollr.decks.animateTo( $(this).attr('data-href') );
		$('.nav-home li').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
	.velocity({ translateY: '100%'}, {duration: 0});

	$('nav.menu-container').velocity({'translateY': '-130%'},{duration: 0});

	$(document).on('mousewheel DOMMouseScroll', function(e) {

		if(!scrolling && !menuOpened){

			if (e.deltaY > 0){


				//console.log('moving UP the page');

				if(currentSlide == maxSlide && $(window).scrollTop() == 0 ){
					slideUpLast();
				}else {

					if(currentSlide > minSlide && currentSlide != maxSlide){
						slideUp();
					}
				}

			} else {

				//console.log('moving DOWN the page');
				
				if(currentSlide <  maxSlide){

					if(currentSlide == maxSlide-1){
						slideDownLast();

					} else {
						slideDown();
					}
				}
			}

		}

	});


});

function slideDownLast() {
	currentSlide++;
	scrolling =  true;

	$('.relative-wrapper').removeClass('fixed');
	$('.relative-wrapper').velocity({
		'padding-top': '0vh'
	},{
		duration: 1000,
		easing: 'easeOutQuad',
		complete: function(){
			$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
			.velocity({ translateY: '100%'}, {duration: 0});
			postScrollSettings();
		}
	});
}

function slideUpLast(){
	currentSlide--;
	scrolling =  true;

	$('.relative-wrapper').velocity({
		'padding-top': '100%'
	}, {
		duration: 1000,
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

function slideDown(){
	currentSlide++;
	scrolling =  true;

	$('.slide[data-slide="'+ currentSlide +'"]').velocity({
		translateY: '0%'
	},{
		duration: 1000,
		easing: 'easeOutQuad',
		complete: function(){
			$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
			.velocity({ translateY: '100%'}, {duration: 0});

			postScrollSettings();
		}
	});

}

function slideUp(){
	scrolling =  true;
	currentSlide--;

	$('.slide[data-slide="'+ (currentSlide+1) +'"]').velocity({
		translateY: '100%'
	},{
		duration: 1000,
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
