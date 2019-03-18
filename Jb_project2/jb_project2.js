/*  >>= TODO ==>
  [x]- Add more rooms so that the game should have at least 9 areas and no more than 20 areas. Allow the player to move between the rooms in a similar way that is described in the book.

  [x]- The player should continue to be able to type the direction they wish to move (for example: "east", "west", "north"). The game output should be part of the DOM, not as an alert or console.log.

  [x]- The user should be able to pick up at least five items, such as a key, a flashlight, a weapon, a candle, and use that item in another room.
      [x]- ITEM: microchip
      [x]- ROOM: is in room 7 - is used in room: 1
      [x]- ITEM: holographic cat toy
      [x]- ROOM: is in room 2 - is used in room: 4

  [x]- The program needs a "save" option. This time it will save the player's current room and the items in their backpack. 
      [x]- JSON OBJECT: use json with the localstorage method depending on your approach.

  []- Include a start screen, play screen, and end screen for when the game is over.
      []- START SCREEN: Will need a start button that sets mapLocation=4  -  could animate start screen -> play screen
        start screen fades away, to maplocation 4 and also start screen doesn't have vieweroutput / notes text
      []- PLAY SCREEN:
      []- GAMEOVER SCREEN:

  []- Continue to have images for each of the rooms. You may add an animation to a room or multiple rooms by using a JS library tool such as Greensock.
      []- ANIMATION FOR A ROOM:

  []- Use jQuery, Greensock, or another library in your game. This can be used as an interface tool or as stated above, to simply add animation to one of the rooms.
      []- ANIMATE SOMETHING: Maybe the gameover screen?
 
  []- The primary part of your code should pass JSLint or eslint (https://eslint.org/).  
    Note-if using js libraries prevents it from passing then you can separate that code out as needed in order to make it pass. The library code 
    (jquery, Greensock, or whatever you may choose) does not have to pass JSLint. 

  []- If you use JSLint then under options for assume. tolerate, and fudge, I will accept everything except for "in development".

  []- Update the code for ES6 in the following ways:
    a) Use at least one example of template literals
    b) Utilize let or var and const with appropriate scoping. 
    c) Include some new es6 string and array methods such as startsWith, endsWith, and includes.
    d) Convert at least one function to an arrow function
    e) Effectively use at least one Object literal in the game
    f) Optional: sperate your logic into cohesive units by using modules

  []- Add sound effects into at least one of the rooms. But you may add sound to multiple rooms and multiple items.
    []- laser sword or meow catnip

  []- Finally
    []- Format your code and comment your code.

    []- Provide me with a new cheat-sheet so I can quickly navigate your game. 

    []- Upload the code to your website 
*/

//Create the map
var map = [];
map[0] = "An old stone keep. A brick and mortor building. A glass and steel skyscraper. A cursed city stretching from Old Las Vegas to Nevada City, an unbroken concrete landscape. Nearly a billion people living in these colossal city structures. Not much really here, just poeple trapped indoors."; //blade runner city-scape 
map[1] = "Spyder's hideout out in the badlands. Spyder says there's an old Satcom device on the back bench I can use.. I should do what Spyder says.."; //ITEM spyder's hideout
map[2] = "At Sunny Glade Sushi Cybercat feasts and searches on for Mickey two'Gloves. <br/>\" there doesn't seem to be anything here\" you thought. It's time to meet Suzie is south of here.. "; //satcom
map[3] = "Suzie helps out Cybercat by picking up crypto-catnip. Suzie said there some goons tailing her on the way out of Mama Sbarro's. "; // catnip and enemies on suzie's trail?
map[4] = "A narrow pathway, a rainy ledge, it doesn't matter to Cybercat. With my cybernetic enhancements and my netrunning abilities no villain nor evil-doer is a match for me!<br/><br/>    Our current mission is to find and take down the Mob Boss: <strong>Mickey two'Gloves</strong>."; //cybercat looking over the city
map[5] = "An ancient gate once golden, stretching over a large expanse of water, across from the colossal structure a city in ruins. Suzie tosses the catnip bag to you and said to be careful of Mickey two'Gloves."; //cybercat meets w/ suzie - suzie warns of mickey two'Gloves
map[6] = "The edge of a small world is where you meet mickey two'Gloves, he'd waiting... With an edgy declaration to his thugs making it sound as if this was an honor duel. He puts a hand out grabbing his junker-steel claymore. In a quick charge Mickey was swinging down at CyberCat!"; //ITEM -- Mickey's end final boss fight
map[7] = "A lonely wooden bench is where you meet your cyborg detective friend. Cybercat worries about him, he's always working on this one case but never seems to make any progress. Your Satcom device blinks rapidly!"; //cybercat follows his robot detective compainion
map[8] = "An isolated techno-cottage. Faint music comes from inside but no owner insight.. a sword leaning on the wall near the window. It could be useful against mickey.."; //ITEM

//Set the player's start location
var mapLocation = 4;

//Mob Boss Mickey Two Gloves. Is the mission complete?
var mickeyTwoGloves = false;

// current game to save
var saveGame = {};
var restoreGame = {};

//Set the images
var images = [];

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aphsh9/blade_runner_background_1920x1080/
images[0] = "/BR-home.png"; // in cyber cat city you cant go outside ... 

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/ansm3p/google_data_center/
images[1] = "/ghideout.jpg"; //spyder's place - helps cyber cat

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aqol99/the_allnew_era_by_rutger_van_de_steeg/ 
images[2] = "/plaza.jpg"; //might replace

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/ap3mv8/meeting/
images[3] = "/stakeout.png";

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aqj6b3/rain_by_ricodz/
images[4] = "/cityscape_start.jpg"; //cyber cat home

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aifkj3/motorbike_cyberpunk_by_ptitvinc/
images[5] = "/Consultation.jpg"; //cybercat meets with suzie

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aqedzr/mickeys_club_house/
images[6] = "/Mickeys_clubhouse.jpg"; //final boss for cyber cat

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aojfqf/nyc_2025_by_raphael_lacoste/
images[7] = "/streets.jpg";

//artist credit: https://www.reddit.com/r/Cyberpunk/comments/aqbx9n/cyberpunk_room_by_adrian_marc/
images[8] = "/suspect_apt.jpg";

//Set the blocked-path messages
var blockedPathMessages = [];
blockedPathMessages[0] = "It's too dangerous to move that way.";
blockedPathMessages[1] = "A mysterious force holds you back.";
blockedPathMessages[2] = "A tangle of thorns blocks your way.";
blockedPathMessages[3] = "You can't step over the dragon.";
blockedPathMessages[4] = "";
blockedPathMessages[5] = "The gate locks shut.";
blockedPathMessages[6] = "The river is too deep to cross.";
blockedPathMessages[7] = "The trees are too thick to pass.";
blockedPathMessages[8] = "You're too scared to go that way.";

//Create the items and set their locations
var items = ["satcom device", "catnip", "laser-sword", "microchip", "holographic cat toy"];
const itemLocations = [1, 5, 8, 7, 2];

//An array to store what the player is carrying
var backpack = [];

//Initialize the player's input
var playersInput = "";

//Initialize the gameMessage
var gameMessage = "";

//Create an array of actions the game understands
//and a variable to store the current action
var actionsIKnow = ["north", "east", "south", "west", "take", "use", "drop"];
var action = "";

//An array of items the game understands
//and a variable to store the current item
var itemsIKnow = ["satcom device", "catnip", "laser-sword", "microchip","holographic cat toy"];
var item = "";

//The img element
var image = document.querySelector("img");

//The input and output fields
const output = document.querySelector("#output");
const input = document.querySelector("#input");

//The buttons
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
//
var saveButton = document.querySelector("#save");
saveButton.style.cursor = "pointer";
saveButton.addEventListener("click",saveInfo);
//
var restoreButton = document.querySelector("#restore");
restoreButton.style.cursor = "pointer";
restoreButton.addEventListener("click",restoreInfo);
//
var hints = document.querySelector("#hints");
hints.style.cursor = "pointer";
hints.addEventListener("click",hintAlert);
//
var startButton = document.querySelector("#start");
startButton.style.cursor = "pointer";
startButton.addEventListener("click",startGame);

//set cat to location 4
//artist credit: http://static1.squarespace.com/static/540a27e8e4b042802a33c882/540a29abe4b0b3642fee510b/597906322e69cf530f535725/1501103706046/catBoarding.png
var cyberCatImage = "../jb_project2/imgs/cat.png"

//Satcom messages
var satcommsgr = document.querySelector("#satcommsg");
var satcommsg = "";

//notes is for output
var notes = document.getElementById("notes");

//Display the player's location
render();

function clickHandler()
{
  playGame();
}

function playGame()
{
  event.preventDefault();
  
   //Get the player's input and convert it to lowercase
   playersInput = input.value;
   playersInput = playersInput.toLowerCase();

   //Reset these variables from the previous turn
   gameMessage = "";
   action = "";

   //Figure out the player's action
   for(i = 0; i < actionsIKnow.length; i++){
    if(playersInput.indexOf(actionsIKnow[i]) !== -1)
    {
      action = actionsIKnow[i];
      console.log("player's action: " + action);
      notes.innerHTML += "player's action: " + action +"<br/>";
      break;
    }
}

//Figure out the item the player wants
for(i = 0; i < itemsIKnow.length; i++)
{
  if(playersInput.indexOf(itemsIKnow[i]) !== -1)
  {
    item = itemsIKnow[i];
    console.log("player's item: " + item);
    notes.innerHTML +="player's item: " + item +"<br/>";
  }
}

//Choose the correct action
switch(action)
{
  case "north":
    if(mapLocation >= 3)
    {
      mapLocation -= 3;
    }
    else
    {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

  case "east":
    if(mapLocation % 3 != 2)
    {
      mapLocation += 1;
    }
    else
    {
      gameMessage = blockedPathMessages[mapLocation];
    }
    break;

  case "south":
    if(mapLocation < 6)
    {
      mapLocation += 3;
    }
    else

      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;

    case "west":
      if(mapLocation % 3 != 0)
      {
        mapLocation -= 1;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;

    case "take":
      takeItem()
      break;

    case "drop":
      dropItem();
      break;

    case "use":
      useItem();
      break;
    default:
      gameMessage = "I don't understand that.";
  }

  //Render the game
  render();
}

function takeItem()
{
   //Find the index number of the item in the items array
   var itemIndexNumber = items.indexOf(item);

   //Does the item exist in the game world and is it at the player's current location?
   if(itemIndexNumber !== -1
   && itemLocations[itemIndexNumber] === mapLocation)
   {
     gameMessage = "You take the " + item + ".";

     //Add the item to the player's backpack
     backpack.push(item);

     //Remove the item from the game world
     items.splice(itemIndexNumber, 1);
     itemLocations.splice(itemIndexNumber, 1);

     //Display in the console for testing
     console.log("World items: " + items);
     console.log("backpack items: " + backpack);
   }
   else
   {
     //Message if the player tries to take an item that isn't in the current location
     gameMessage = "You can't do that.";
   }
}

function dropItem()
{
   //Try to drop the item only if the backpack isn't empty
   if(backpack.length !== 0)
   {
     //Find the item's array index number in the backpack
     var backpackIndexNumber = backpack.indexOf(item);

     //The item is in the backpack if the backpackIndexNumber isn't -1
     if(backpackIndexNumber !== -1)
     {

      //Tell the player that the item has been dropped
      gameMessage = "You use the " + item + ".";

      //Add the item from the backpack to the game world
      items.push(backpack[backpackIndexNumber]);
      itemLocations.push(mapLocation);

      //Remove the item from the player's backpack
      backpack.splice(backpackIndexNumber, 1);
     }
     else
     {
       //Message if the player tries to drop something that's not in the backpack
       gameMessage = "You can't do that.";
     }
   }
   else
   {
     //Message if the backpack is empty
     gameMessage = "You're not carrying anything.";
   }
}

function useItem()
{
   //1. Find out if the item is in the backpack

   //Find the item's array index number in the backpack
   var backpackIndexNumber = backpack.indexOf(item);

   //If the index number is -1, then it isn't in the backpack.
   //Tell the player that he or she isn't carrying it.
   if(backpackIndexNumber === -1)
   {
     gameMessage = "You're not carrying it.";
   }

   //If there are no items in the backpack, then
   //tell the player the backpack is empty
   if(backpack.length === 0)
   {
     gameMessage += " Your backpack is empty";
   }

   //2. If the item is found in the backpack
   //figure out what to do with it
   if(backpackIndexNumber !== -1)
   {
     switch(item)
     {
       case "satcom device":
         gameMessage = "A terminal window opens with a connection to a sattelite scanning for the next best move.";
         if(mapLocation === 7){
          satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br/>The detective said that Mickey's hideout is west of here. It's showtime Mickey!";
         }
         else{
          satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br/>.. it's blinking but there doesn't seem to be any hints or new messages";
         }
         break;

       case "laser-sword":
         if(mapLocation === 6)
         {
           gameMessage = "You ignite your laser-sword down by your side, its blade hums in an all too shadowy place. You see two'Gloves double-handed attack like it was a planned meeting weeks in advance, the perks of cybernetic implants; cat-like reflexes. Lunging left, sort of falling, you bring your laser-sword up and inside Mickey's guard, his sword and hands fall to the ground. The day is won. ";
           mickeyTwoGloves = true;
         }
         else
         {
           gameMessage = "You laser-sword sputters and emits a small light... I guess it's more of a dagger isn't it?";
         }
         break;

       case "catnip":
         if(mapLocation === 5)
         {
           gameMessage = "With the bag in shreds you dive at the ground rubbing dry plant flakes all over. Your cybernetic enhancements are on the fritz causing you to dart back and forth in a zig-zag pattern! After a storm of twitches and frantic, your senses recover and you feel stronger, faster.."; //catnip

           //Remove the item from the player's backpack
           backpack.splice(backpackIndexNumber, 1);
         }
         else
         {
           gameMessage = "You fumble with the catnip package failing to open it..."; 
         }
         break;

         case "microchip":
         if(mapLocation === 1)
         {
           gameMessage = "Spyder takes the microchip, examines it closely through a magnifier. \"Thanks little kitty! Where'd you get this?!\"";  
         }
         else
         {
           gameMessage = "The detective gave me this microchip but what do I do with it? Maybe Spyder wil know..";
         }
         break;

       case "holographic cat toy":
        if(mapLocation === 4)
        {
          gameMessage = "You playfully bat at the holographic image projected by the cat toy from the skyscraper rooftop.";
        }
        else
        {
          gameMessage = "This toy doesn't really do much..";
        }
        break;
        
      }
   }
}

function render()
{

  // check if game is won!
   endGame();

   //Render the location
   output.innerHTML = map[mapLocation];
   image.src = "../jb_project2/imgs" + images[mapLocation];
  
  //  //minimapLocation
  //  //  >--> form reset ??
  //  // mini map isn't finished it's broken.
  //  var miniCat = "miniCat_"+ mapLocation;
  //  var minimapCat = document.getElementById(miniCat);
  //  minimapCat.src = "../jb_project2/imgs/cybercat.png";
  //  //minimap render location
  //  //
  //  //sets minimapCat Location

   //Display an item if there's one in this location
   //1. Loop through all the game items
   for(var i = 0; i < items.length; i++)
   {
     //Find out if there's an item at this location
     if(mapLocation === itemLocations[i])
     {
       //Display it
       output.innerHTML
       += "<br><br>You see a <strong>"
       + items[i]
       + "</strong> here."
     }
   }

   //Display the game message
   output.innerHTML += "<br><br><em>" + gameMessage + "</em>";

   //Display the player's backpack contents
   if(backpack.length !== 0)
   {
     output.innerHTML += "<br><br>You are carrying: " + backpack.join(", ");
   }
}

function saveInfo(){
  "use strict";

  // fixes reload issues
  event.preventDefault();

  //object property instatiation
  saveGame.mapLocation = mapLocation;
  saveGame.savedBackpack = backpack;

  localStorage.setItem("saveGame",JSON.stringify(saveGame));
  notes.innerHTML += "<br>Saving Map Location: "+saveGame.mapLocation+" and items you're carrying: "+saveGame.savedBackpack+".<br>";

}

function restoreInfo(){
  "use strict";

  // fixes reload issues
  event.preventDefault();

  restoreGame = JSON.parse(localStorage.getItem("saveGame"));
  //
  if(restoreGame !== undefined)
  {
    mapLocation = parseInt(restoreGame.mapLocation);
    backpack = restoreGame.savedBackpack;

    notes.innerHTML = "Game restored!<br>";
  }
  else
  {
    notes.innerHTML = "<br>There's nothing to restore!<br>";
  }
  
playGame();
}

function endGame(){
  "use strict";

  // check to see if you're at Mickey's hideout and have killed him, and that you have two items.
  if(mapLocation === 6 && mickeyTwoGloves){
    gameMessage += "His thugs scatter and clammer about.<br> Even with all the ruckus you hear your Satcom's subtle beeps and its dim holo-lights fill the lightless room:";
    satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br>Well Done Cybercat! You've taken out Mickey two'Gloves. Meet me at the loft for payment. Detective out! "

    //css animation to fade to game over screen
    //
    image.src = "../jb_project2/imgs/GameOver.png";


  }
}

function hintAlert(){
  "use strict";

  // fixes reload issues
  event.preventDefault();
  let desc = "Your Mission: Find a mob boss named Mickey and kill him.\n\n";
  let gameItems = "Game Items:\n\t Laser-Sword(room 9)\n\t Catnip(room 6)\n\t Satcom Device(room 2)\n";
  let fastestRoute = "Fastest Route: Room 2 -> Room 9 -> Room 7";

  alert(desc+gameItems+fastestRoute);

}

function startGame() {

  event.preventDefault();
  image.src = "../jb_project2/imgs/title.png";
  
 
}