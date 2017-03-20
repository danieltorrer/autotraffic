$(document).ready(function(){

  if(window.innerWidth > 768){
    var controller = new ScrollMagic.Controller();

    var tween = new TimelineMax ()
    .add([
      TweenMax.fromTo('.nube-1', 1, {scale: 1, top: 100}, { left: 900,  ease: Linear.easeNone}),
      TweenMax.fromTo('.nube-2', 1, {scale: 1, top: 200}, { right: 1600, ease: Linear.easeNone}),
      TweenMax.fromTo('.nube-3', 1, {scale: 1, top: -200}, { top: 900, ease: Linear.easeNone})
    ]);

    var scene = new ScrollMagic.Scene({
      triggerElement: '.animation',
      duration: '100%'
      //duration: $(window).width()
    })
  					.setTween(tween)
  					.addIndicators() // add indicators (requires plugin)
  					.addTo(controller);

  }
});
