/*  >>= TODO ==>
      [x]- ARTIST CREDIT
      []- ENTER BUTTON RETURN KEYBOARD BUTTON FUNCTION
      []- WRITE CYBER CAT STORY BASED ON IMAGE MAP
        [x]- REWORK IMAGES IF NECESSARY
      [x]- MINIMAP
        [-]- Render Minimap location  - trouble clearing past move..
      []- AFTER ITEM PICK UP - DIV SHOWS
        []- satcom: directional info 
        []- item2
        []- item3
      []- SAVE BUTTON
        []- localStorage (Module 3)
      [x]-FIX FOOTER

      END GAME:
      []- IF PLAYER HAS ALL THREE ITEMS, AND THEN MOVES TO MAP[6] a button appears"Use Hit Cat Powers"
*/

//Create the map
var map = [];

map[0] = "An old stone keep."; //blade runner city-scape 
map[1] = "Spyder's hideout out in the badlands."; //ITEM spyder's hideout
map[2] = "A sunny glade."; //green city plaza
map[3] = "A sleeping dragon."; // catnip and enemies on cybercat's trail?
map[4] = "A narrow pathway, a rainy ledge, it doesn't matter to the crime-fighting cybercat."; //cybercat looking over the city
map[5] = "An ancient gate."; //cybercat meets w/ suzie - suzie warns of mickey (need a gangster name)
map[6] = "The edge of a river."; //ITEM -- Mickey's end final boss fight
map[7] = "A lonely wooden bench."; //cybercat follows his robot detective compainion
map[8] = "An isolated techno-cottage. Faint music comes from inside but no owner insight.. a sword leaning on the wall near the window. It could be useful against mickey.."; //ITEM

//Set the player's start location
var mapLocation = 4;

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
var items = ["satcom device", "stone", "sword"];
var itemLocations = [1, 6, 8];

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
var itemsIKnow = ["satcom device", "stone", "sword"];
var item = "";

//The img element
var image = document.querySelector("img");

//The input and output fields
var output = document.querySelector("#output");
var input = document.querySelector("#input");

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
var restoredMapLocation = localStorage.getItem("theMapLocation");

//set cat to location 4
//artist credit: http://static1.squarespace.com/static/540a27e8e4b042802a33c882/540a29abe4b0b3642fee510b/597906322e69cf530f535725/1501103706046/catBoarding.png
var cyberCatImage = "../Jb_project1/imgs/cat.png"

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
      gameMessage = "You drop the " + item + ".";

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
         gameMessage = "A terminal window opens with a connection to a sattelite scanning for the next best move  .. more story ";
         //maybe add satcom function here
         break;

       case "sword":
         if(mapLocation === 3)//should slay mickey
         {
           gameMessage = "You swing the sword and slay the dragon!";
         }
         else
         {
           gameMessage = "You swing the sword listlessly.";
         }
         break;

       case "stone":
         if(mapLocation === 1)
         {
           gameMessage = "You drop the stone in the well.";

           //Remove the item from the player's backpack
           backpack.splice(backpackIndexNumber, 1);
         }
         else
         {
           gameMessage //satcom action
             = "You fumble with the stone in your pocket.";
         }
         break;
      }
   }
}

function render()
{
   //Render the location
   output.innerHTML = map[mapLocation];
   image.src = "../Jb_project1/imgs" + images[mapLocation];

   //minimapLocation
   //
   // mini map isn't finished it's broken.
   var miniCat = "miniCat_"+ mapLocation;
   var minimapCat = document.getElementById(miniCat);
   var miniCells = document.getElementsByClassName("cell");
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

  var theMapLocation = mapLocation;
  //var backpackBag = backpack;

  localStorage.setItem("theMapLocation",theMapLocation);
  //localStorage.setItem("theBackpackBag",backpackBag);

  notes.innerHTML = "Map location saved: "+theMapLocation;
}

function restoreInfo(){
  "use strict";

  notes.innerHTML = "Restoring from a previous map location: " + restoredMapLocation;

  // this breaks the game.. no fun. :(
  //mapLocation = restoredMapLocation;
  //playGame();
}