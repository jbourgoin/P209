var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 32;		
ctx.lineJoin = "round";	   
ctx.strokeStyle = "red";
ctx.fillStyle = "white";
ctx.save();

//straight line
ctx.beginPath();
ctx.moveTo(370,255);
ctx.lineTo(370,560);

//bent line
ctx.moveTo(260,560);
ctx.lineTo(260,450);
ctx.lineTo(310,355);
ctx.lineTo(310,255);
ctx.strokeStyle = "black";
ctx.save();

//triangle
ctx.moveTo(100, 600);
ctx.lineTo(600, 600);
ctx.lineTo(320, 100);
ctx.closePath();
ctx.fill();
ctx.restore();

ctx.stroke();

var canvas = document.querySelector("#myCanvas2");
var ctx2 = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx2.save();			// save previous display state
//  set drawing properties for the sign
ctx2.lineWidth = 32;	       // nice wide line		
ctx2.lineJoin = "round";	   // rounded corners
ctx2.strokeStyle = "red";
ctx2.fillStyle = "red";

// create octagon linear path
ctx2.beginPath();
ctx2.arc(300,300,100,0,2*Math.PI)
ctx2.closePath();

// fill the sign and draw wide red lines
ctx2.fill();
ctx2.stroke();	

// draw DO NOT ENTER text
ctx2.fillStyle  = "white";

ctx2.font = "bold 40px Arial";
ctx2.fillText( "DO NOT" ,220, 290);
ctx2.strokeStyle = "white";
ctx2.moveTo(220,320);
ctx2.lineTo(320,220);
ctx2.fillText( "ENTER" ,235, 360);
ctx2.save();
ctx2.restore();

