/*  >>= TODO ==>
      [x]- ARTIST CREDIT
      [x]- ENTER BUTTON RETURN KEYBOARD BUTTON FUNCTION
      [x]- WRITE CYBER CAT STORY BASED ON IMAGE MAP
        [X] - SET STAGE AT MAP START
        [x]- REWORK IMAGES 
      [x]- MINIMAP <- Extra Puzzle Element
        [-]- Render Minimap location  - trouble clearing past move..
      []- AFTER ITEM PICK UP - DIV SHOWS
        [X]- satcom: directional info 
        [x]- Laser-sword: atk weap
        [x]- catnip
      [x]- SAVE BUTTON
        [x]- localStorage (Module 3)
      [x]-FIX FOOTER

      END GAME:
      [X]- IF PLAYER HAS LASER-SWORD & SATCOM DEVICE, AND IS AT MAP[6], AND MICKEY HAS BEEN SLAIN.

      1. [x]- E,w,n,s text entry
      2. [x]- Must be able to pick up 3 items
      3. [x]- LocalStorage
      4. [X]- Extra puzzle feature
      5. [x]- ES6
      6. [x]- Use CSS for screen manipulation
      7. [x]- Img for each area
      8. [x]- Project follows the reading material
      9. [x]- Use CSS, JavaScript & HTML only, no JS libraries.
      10. [x]- Format and Comment your code
      11. [x]- Provide a cheatsheet
      12. []- Submit Via Github
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
var items = ["satcom device", "catnip", "laser-sword"]; //catnip
const itemLocations = [1, 5, 8];

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
var itemsIKnow = ["satcom device", "catnip", "laser-sword"];  //catnip
var item = "";

//The img element
var image = document.querySelector("img");

//The input and output fields
const output = document.querySelector("#output");
const input = document.querySelector("#input");

//The button
var button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
//
var saveButton = document.querySelector("#save");
saveButton.addEventListener("click",saveInfo);
//
var restoreButton = document.querySelector("#restore");
restoreButton.addEventListener("click",restoreInfo);
//
var hints = document.querySelector("#hints");
hints.addEventListener("click",hintAlert);

//set cat to location 4
//artist credit: http://static1.squarespace.com/static/540a27e8e4b042802a33c882/540a29abe4b0b3642fee510b/597906322e69cf530f535725/1501103706046/catBoarding.png
var cyberCatImage = "../Jb_project1/imgs/cat.png"

//Satcom messages
var satcommsgr = document.querySelector("#satcommsg");
var satcommsg = "";

//notes is for output
var notes=document.getElementById("notes");

//Display the player's location
render();

function clickHandler()
{
  playGame();
}

function playGame()
{
  event.preventDefault();
  
  endGame();
   //Get the player's input and convert it to lowercase
   playersInput = input.value;
   playersInput = playersInput.toLowerCase();

   //Reset these variables from the previous turn
   gameMessage = "";
   action = "";

   //Figure out the player's action
   for(i = 0; i < actionsIKnow.length; i++)

{
  if(playersInput.indexOf(actionsIKnow[i]) !== -1)
  {
    action = actionsIKnow[i];
    console.log("player's action: " + action);
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
       case "satcom device": //satcom action
         gameMessage = "A terminal window opens with a connection to a sattelite scanning for the next best move.";
         if(mapLocation === 7){
          satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br/>The detective said that Mickey's hideout is west of here. It's showtime Mickey!";
         }
         else{
          satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br/>.. it's blinking but there doesn't seem to be any hints or new messages";
         }
         break;

       case "laser-sword":
         if(mapLocation === 6)//slay mickey
         {
           gameMessage = "You ignite your laser-sword down by your side, its blade hums in an all too shadowy place. You see two'Gloves double-handed attack like it was a planned meeting weeks in advance, the perks of cybernetic implants; cat-like reflexes. Lunging left, sort of falling, you bring your laser-sword up and inside Mickey's guard, his sword and hands fall to the ground. The day is won. ";
           mickeyTwoGloves = true;
         }
         else
         {
           gameMessage = "You laser-sword sputters and emits a small light... I guess it's more of a dagger isn't it?";
         }
         break;

       case "catnip": //catnip
         if(mapLocation === 5)
         {
           gameMessage = "With the bag in shreds you dive at the ground rubbing dry plant flakes all over. Your cybernetic enhancements are on the fritz causing you to dart back and forth in a zig-zag pattern! After a storm of twitches and frantic, your senses recover and you feel stronger, faster.."; //catnip

           //Remove the item from the player's backpack
           backpack.splice(backpackIndexNumber, 1);
         }
         else
         {
           gameMessage
             = "You fumble with the catnip package failing to open it..."; //catnip
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
   image.src = "../Jb_project1/imgs" + images[mapLocation];

   //minimapLocation
   //  >--> form reset ??
   // mini map isn't finished it's broken.
   var miniCat = "miniCat_"+ mapLocation;
   var minimapCat = document.getElementById(miniCat);
   minimapCat.src = "../Jb_project1/imgs/cybercat.png";
   //minimap render location
   //
   //sets minimapCat Location

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
  var theMapLocation = mapLocation;
  //
  //maps browser localStorage variables
  //
  localStorage.setItem("theMapLocation",theMapLocation);
  
  //Notes output
  notes.innerHTML = "Map location saved: "+theMapLocation;
}

function restoreInfo(){
  "use strict";

  // fixes reload issues
  event.preventDefault();
  //
  //gets browser storage varaibles
  mapLocation = parseInt(localStorage.getItem("theMapLocation"));
  notes.innerHTML = "Restoring from a previous map location: " + mapLocation;

playGame();
}

function endGame(){
  "use strict";

  // check to see if you're at Mickey's hideout and have killed him, and that you have two items.
  if(mapLocation === 6 && mickeyTwoGloves){
    gameMessage += "His thugs scatter and clammer about.<br/> Even with all the ruckus you hear your Satcom's subtle beeps and its dim holo-lights fill the lightless room:";
    satcommsgr.innerHTML = "<strong>Satcom terminal screen: </strong><br/>Well Done Cybercat! You've taken out Mickey two'Gloves. Meet me at the loft for payment. Detective out! "
    alert("You've Won great job!");
  }
}

function hintAlert(){
  "use strict";
  let desc = "Your Mission: Find a mob boss named Mickey and kill him.\n\n";
  let gameItems = "Game Items:\n\tLaser-Sword(room 9)\n\tCatnip(room 6)\n\tSatcom Device(room 2)\n";
  let fastestRoute = "Fastest Route: Room 2 -> Room 9 -> Room 7";

  alert(desc+gameItems+fastestRoute);

}