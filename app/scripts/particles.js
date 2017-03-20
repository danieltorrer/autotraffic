var resizeReset = function() {
    canvasBody.width = window.innerWidth * 1.3;
    canvasBody.height = window.innerHeight * 1.3;

    w = canvasBody.width;
    h = canvasBody.height;

    if(window.innerWidth < 768){
      numParticles = 40;
    } else {
      numParticles = 100;
    }
}

window.addEventListener('resize', function(){
    deBouncer();
});

var deBouncer = function() {
    clearTimeout(tid);
    tid = setTimeout(function() {
        resizeReset();
    }, delay);
};

var checkDistance = function(x1, y1, x2, y2){
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

var linkPoints = function(point1, hubs){
    for (var i = 0; i < hubs.length; i++) {
      if (!hubs[i].isIcon && !point1.isIcon) {
        var distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
        var opacity = 1 - distance / opts.linkRadius;
        if (opacity > 0) {
            drawArea.lineWidth = 0.5;
            drawArea.strokeStyle = 'rgba(255, 255, 255, 0.3 )';
            drawArea.beginPath();
            drawArea.moveTo(point1.x, point1.y);
            drawArea.lineTo(hubs[i].x, hubs[i].y);
            drawArea.closePath();
            drawArea.stroke();
        }
      }
    }
}

var Particle = function(xPos, yPos){
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
    this.directionAngle = Math.floor(Math.random() * 360);
    this.color = opts.particleColor;
    this.radius = opts.defaultRadius + Math.random() * opts. variantRadius;
    this.isIcon = Math.random() * 100 >= 90 ? true : false;


    if( this.isIcon ){
      var icono = Math.floor( Math.random() * 100 % opts.icons.length );
      this.icon = document.querySelector( opts.icons[icono] );
    }

    this.vector = {
        x: Math.cos(this.directionAngle) * this.speed/2,
        y: Math.sin(this.directionAngle) * this.speed/2
    };

    this.update = function(){
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
    };
    this.border = function(){
        if (this.x >= w || this.x <= 0) {
            this.vector.x *= -1;
        }
        if (this.y >= h || this.y <= 0) {
            this.vector.y *= -1;
        }
        if (this.x > w) this.x = w;
        if (this.y > h) this.y = h;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
    };
    this.draw = function(){
      if(this.isIcon){
        drawArea.drawImage( this.icon, this.x, this.y);
      } else {
        drawArea.beginPath();
        drawArea.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        drawArea.closePath();
        drawArea.fillStyle = this.color;
        drawArea.fill();
      }
    };
};

function setup(){
    particles = [];
    resizeReset();

    opts.particleAmount = numParticles;

    for (var i = 0; i < opts.particleAmount; i++){
        particles.push( new Particle() );
    }
    window.requestAnimationFrame(loop);
}

function loop(){
    window.requestAnimationFrame(loop);

    if (currentSlide == 0) {
      drawArea.clearRect(0,0,w,h);
      for (var i = 0; i < particles.length; i++){
          particles[i].update();
          particles[i].draw();
      }
      for (var i = 0; i < particles.length; i++){
          linkPoints(particles[i], particles);
      }
    }
}

var numParticles = 40;

var opts = {
  particleColor: 'rgba(250,250,250, 0.5)',
  lineColor: 'rgba(250,250,250, 0.5)',
  particleAmount: numParticles,
  defaultSpeed: 1,
  variantSpeed: 2,
  defaultRadius: 2,
  variantRadius: 1,
  linkRadius: 170,
  icons: ['.bike-icon', '.network-icon', '.bus-icon', '.car-icon','.cel-icon','.laptop-icon','.head-icon']
};

var canvasBody = document.getElementById('nodes'),
      drawArea = canvasBody.getContext('2d');

var grd;


var delay = 200, tid, w, h, particles,
    rgb = opts.lineColor.match(/\d+/g);

$(document).ready( function() {
  resizeReset();
  setup();
})
