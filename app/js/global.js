const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

const colors = [
  "#ffff0080",
  "#FF000080",
  "#00800080",
  "#FFC0CB80",
  "#0000EE80",
  
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