var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//  set drawing properties for the sign
ctx.lineWidth = 32;	       // nice wide line		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "red";
ctx.fillStyle = "white";
ctx.save();
// create octagon linear path
ctx.beginPath();
ctx.moveTo(100, 600);
ctx.lineTo(600, 600);
ctx.lineTo(320, 100);
ctx.closePath();
ctx.fill();
ctx.stroke();	


//straight line
ctx.moveTo(370,255);
ctx.lineTo(370,560);
ctx.moveTo(370,340);
ctx.lineTo(370,340);

//bent line
ctx.moveTo(260,560);
ctx.lineTo(260,450);
ctx.lineTo(310,355);
ctx.lineTo(310,255);

ctx.stroke();
		// restore previous display state
