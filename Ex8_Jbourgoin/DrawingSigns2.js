var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.save();			// save previous display state
//  set drawing properties for the sign
ctx.lineWidth = 32;	       // nice wide line		
ctx.lineJoin = "round";	   // rounded corners
ctx.strokeStyle = "red";
ctx.fillStyle = "red";

// create octagon linear path
ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(350, 100);
ctx.lineTo(450, 200);
ctx.lineTo(450, 350);
ctx.lineTo(350, 450);
ctx.lineTo(200, 450);
ctx.lineTo(100, 350);
ctx.lineTo(100, 200);
ctx.closePath();

// fill the sign and draw wide red lines
ctx.fill();
ctx.stroke();	

// draw narrower white lines -- these will display on top of the wide red lines and make the red lines
// look like the outside edge -- a nice trick!
ctx.strokeStyle = "white";
ctx.lineWidth = 10;
ctx.stroke();

// draw STOP text
ctx.fillStyle  = "white";
ctx.font = "bold 100px Arial";
ctx.fillText( "STOP" ,140, 310);
ctx.restore();		// restore previous display state