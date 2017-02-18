'use strict';

var scrolling = false;
var position = $(window).scrollTop();
var currentSlide = 0;
var minSlide = 0;
var maxSlide = 2;

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

	$(document).on('mousewheel DOMMouseScroll', function(e) {

		if(!scrolling){

			if (event.deltaY > 0){
				console.log('moving DOWN the page');
				if(currentSlide <  maxSlide){
					scrolling =  true;
					currentSlide++;
					// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]').addClass('displace');
					$('.slide[data-slide="'+ currentSlide +'"]').velocity({
						translateY: '0%',
					},{
						duration: 1200,
						complete: function(){
							scrolling = false
						}
					});
				}
			} else {
				console.log('moving UP the page');
				// $('.scroll-body .slide').removeClass('animated');
				if(currentSlide > minSlide){
					scrolling =  true;
					currentSlide--;
					$('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]')
					.velocity({ translateY: '100%'}, {duration: 1200,
						complete: function(){
							scrolling = false
						}
					});

					$('.slide[data-slide="'+ currentSlide +'"]').velocity({
						translateY: '0%',
					},{
						duration: 1200,
						complete: function(){
							scrolling = false
						}
					});
				}
				// $('.scroll-body .slide').not('[data-slide="'+ currentSlide +'"]').addClass('displace');
				// $('.slide[data-slide="'+ currentSlide +'"]').addClass('animated').removeClass('displace');


			}

		}

	});


});


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
