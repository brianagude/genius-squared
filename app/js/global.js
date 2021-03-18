const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const colors = [
  "rgba(255, 255, 0, 0.8)",
  "rgba(255,192,203, 0.8)",
  "rgba(0, 128, 0, 0.8)",
  "rgba(0, 0, 255, 0.8)",
  "rgba(255,0,0, 0.8)",
]

var pointSize = 15;

function windowResize(){
  canvas.width = window.outerWidth
  canvas.height = window.outerHeight
}

function getPosition(event){
  var rect = canvas.getBoundingClientRect();
  var x = event.clientX - rect.left;
  var y = event.clientY - rect.top;

  drawCoordinates(x,y);
}

function drawCoordinates(x,y){
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];;
  ctx.beginPath();
  ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
  ctx.fill();
}

$(canvas).click(function(e){
   getPosition(e); 
});

setInterval(function() {
  drawCoordinates(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
}, 1500);


$(window).resize(function() {
  windowResize()
});

$(window).on( "orientationchange", function( event ) {
  windowResize()
});

windowResize()

