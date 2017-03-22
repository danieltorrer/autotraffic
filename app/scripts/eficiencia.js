$(document).ready(function(){

  if(window.innerWidth > 768){
    var images = [
      '../images/secuencia/34.jpg',
      '../images/secuencia/35.jpg',
      '../images/secuencia/36.jpg',
      '../images/secuencia/37.jpg',
      '../images/secuencia/38.jpg',
      '../images/secuencia/39.jpg',
      '../images/secuencia/40.jpg',
      '../images/secuencia/41.jpg',
      '../images/secuencia/42.jpg',
      '../images/secuencia/43.jpg',
      '../images/secuencia/44.jpg',
      '../images/secuencia/45.jpg',
      '../images/secuencia/46.jpg',
      '../images/secuencia/47.jpg',
      '../images/secuencia/48.jpg',
      '../images/secuencia/49.jpg',
      '../images/secuencia/50.jpg',
      '../images/secuencia/51.jpg',
      '../images/secuencia/52.jpg',
      '../images/secuencia/53.jpg',
      '../images/secuencia/54.jpg',
      '../images/secuencia/55.jpg',
      '../images/secuencia/56.jpg',
      '../images/secuencia/57.jpg',
      '../images/secuencia/58.jpg',
      '../images/secuencia/59.jpg',
      '../images/secuencia/60.jpg',
    ];

    var obj = {curImg: 0};

    var tween = TweenMax.to(obj, 0.5,
      {
        curImg: images.length - 1,	// animate propery curImg to number of images
        roundProps: 'curImg',				// only integers so it can be used as an array index
        repeat: 1,									// repeat 3 times
        immediateRender: true,			// load first image automatically
        ease: Linear.easeNone,			// show every image the same ammount of time
        onUpdate: function () {
          $('.myImg').attr('src', images[obj.curImg]); // set the image source
        }
      }
    );

    var controller = new ScrollMagic.Controller();

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: '#trigger', duration: '100%'})
    .setTween(tween)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  }
});
