/*
[x]- Update the game code to ES6 format. Utilize let and const in addition to using var,
 or use let and const rather than var. What else can you do to better format it into ES6 format?

[x]- Add "use strict" to the top line of each of the functions.

[x]- Create a literal object for the UFO image. Place it at a different position in the game window.
 Add a user control to move it up and down when the user presses the "w" and "z" keys.

[x]- Add a photon sound of your choice. You will need to find an appropriate audio file and a sound you like.
 When the user presses "Fire" button then the photon torpedo is launched and photon audio sound is played.

Optional:
[]- Have the UFO vanish if the torpedo hits it.
    
[x]- Increase the speed of the spaceship.

[]- Update at least one function into arrow function syntax.

*/

// Arrow key codes
let UP = 38;
let DOWN = 40;
let RIGHT = 39;
let LEFT = 37;

// rocket object
let rocket = {
 img: document.querySelector("#rocket"),
 x: 490,
 y: 390,
 width: 100
};
const velocity = 10;

// html objects
const torpedo = document.querySelector("#torpedo");
const startBtn = document.querySelector("#start");
const fireBtn = document.querySelector("#fire");

// ufo object
let ufo = {
    img: document.querySelector("#ufo"),
    x: 125,
    y: 90,
    width: 100
};

//sound object
const audio = new Audio('Gun-Silencer-SoundBible.com-193331132.mp3');

// Initialize objects on the screen
render( );

startBtn.addEventListener("click",startGameHandler,false);
fireBtn.addEventListener("click",fireTorpedoHandler,false);
window.addEventListener("keydown",keydownHandler,false);

function startGameHandler( ) {
"use strict";
// Hide the intro screen, show the game screen
introScreen.style.display = "none";
gameScreen.style.display = "block";
rocket.img.style.display = "block";
ufo.img.style.display = "block";
}

function fireTorpedoHandler( ) {
 "use strict";
 // Fire the photon torpedo!
 // CSS animation occurs whenever torpedo
 // 'left' property changes value
 torpedo.style.visibility = "visible";
 torpedo.style.left = (rocket.x - 480)+ "px";

 //torpedo sound
 audio.play();
}

function keydownHandler(event) {
 "use strict";
 // handle user keyboard input

if (event.keyCode == UP) {
 rocket.y -= velocity;
}
if (event.keyCode == LEFT) {
 rocket.x -= velocity;
}
if (event.keyCode === DOWN) {
 rocket.y += velocity;
}
if (event.keyCode == RIGHT) {
 rocket.x += velocity;
}

// ufo directional directives
if(event.keyCode == 87) {
 ufo.x += velocity;
}
if(event.keyCode == 90) {
 ufo.y += velocity;
}

render( );
}

function render( ) {
 "use strict";
 // position objects on the screen
 rocket.img.style.left = rocket.x + "px";
 rocket.img.style.top = rocket.y + "px";
 torpedo.style.left = (rocket.x +10) + "px";
 torpedo.style.top = (rocket.y+8) + "px";
 torpedo.style.visibility = "hidden";

 // ufo directional directives
 ufo.img.style.left = ufo.x + "px";
 ufo.img.style.top = ufo.y + "px";
 
 // to control reset sound
 audio.pause;
}