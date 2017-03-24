$(document).ready(function(){

  if(window.innerWidth > 768){
    var controller = new ScrollMagic.Controller();

    var tween = new TimelineMax ()
    .add([
      TweenMax.fromTo('.nube-1', 1, {scale: 1, top: 0, right: 0}, { right: 1000,  ease: Linear.easeOut}),
      TweenMax.fromTo('.nube-2', 1, {scale: 1, top: -100, right: 30}, { right: 1800, ease: Linear.easeOut})
      // TweenMax.fromTo('.nube-3', 1, {scale: 1, top: -200}, { right: 2000, ease: Linear.easeOut})
    ]);

    var scene = new ScrollMagic.Scene({
      triggerElement: '.animation',
      duration: '100%'
      //duration: $(window).width()
    })
  					.setTween(tween)
  					// .addIndicators() // add indicators (requires plugin)
  					.addTo(controller);

  }
});
