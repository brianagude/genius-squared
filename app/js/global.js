const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const colors = [
  "rgba(255, 255, 0, 0.8)",
  "rgba(255,192,203, 0.8)",
  "rgba(0, 128, 0, 0.8)",
  "rgba(0, 0, 255, 0.8)",
  "rgba(255,0,0, 0.8)",
]

$(canvas).click(function(e){
   getPosition(e); 
});

var pointSize = 15;

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

$(document).ready(function() {
    setTimeout(function() {
       drawCoordinates(Math.random() * window.outerWidth,Math.random() * window.outerHeight)
    }, 3000);
});

// $(document).ready(function(){
//   setTimeout(drawCoordinates(300,300), 5000);
// })
