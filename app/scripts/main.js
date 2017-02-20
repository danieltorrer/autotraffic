'use strict';

var scrolling = false;
var position = $(window).scrollTop();
var currentSlide = 0;
var minSlide = 0;
var maxSlide = 3;

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

	$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
	.velocity({ translateY: '100%'}, {duration: 0});

	$(document).on('mousewheel DOMMouseScroll', function(e) {

		if(!scrolling){

			if (event.deltaY > 0){
				console.log('moving DOWN the page');
				if(currentSlide <  maxSlide){
					scrolling =  true;
					console.log('currentSlide ' + currentSlide);
					currentSlide++;
					// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]').addClass('displace');
					if(currentSlide == maxSlide){

						$('.relative-wrapper').removeClass('fixed');
						$('.relative-wrapper').velocity({
							'padding-top': '0vh'
						},{
							duration: 1000,
							easing: "easeOutQuad",
							complete: function(){
								scrolling = false;

								$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
								.velocity({ translateY: '100%'}, {duration: 0});

								postScrollSettings();
							}
						});

					} else {

						$('.slide[data-slide="'+ currentSlide +'"]').velocity({
							translateY: '0%'
						},{
							duration: 1000,
							easing: "easeOutQuad",
							complete: function(){
								scrolling = false;

								$('.scroll-body .slide[data-slide="'+ (currentSlide+1) +'"]')
								.velocity({ translateY: '100%'}, {duration: 0});

								postScrollSettings();
							}
						});
					}
				}

			} else {
				console.log('moving UP the page');
				// $('.scroll-body .slide').removeClass('animated');

				if(currentSlide == maxSlide){
					console.log(event.deltaX, event.deltaY, event.deltaFactor);
				}

				if(currentSlide > minSlide){
					scrolling =  true;
					console.log('currentSlide ' + currentSlide);

					currentSlide--;

					$('.slide[data-slide="'+ (currentSlide+1) +'"]').velocity({
						translateY: '100%'
					},{
						duration: 1000,
						easing: "easeOutQuad",
						complete: function(){
							scrolling = false;

							postScrollSettings();
						}
					});
					// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]')
					// .velocity({ translateY: '100%'}, {duration: 0}});
					//

				}
				// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]').addClass('displace');
				// $('.slide[data-slide="'+ currentSlide +'"]').addClass('animated').removeClass('displace');


			}

		}

	});


});


function postScrollSettings(){
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
