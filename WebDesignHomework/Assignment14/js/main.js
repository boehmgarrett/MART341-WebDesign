var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//line
ctx.moveTo(0,0);
ctx.lineTo(110,0);
ctx.stroke();

//circle
ctx.beginPath();
ctx.arc(45, 50, 40, 0, 2 * Math.PI);
ctx.stroke();