/* Project Requirements
[x] Create a simple HTML interface that allows a user to input at least 9 different items into a text input field. 
   You may create multiple input fields on an HTML page, use one input field on an HTML page, or even use a prompt
   to collect the user data. 

[x] The user's data will be stored in an array.

[x] After the user has finished entering the data then they will need to click on a button. 
    Clicking on the button will trigger a function and shuffle the array (this will cause their input data to be shuffled)

[x] Display the shuffled array data outputted to the HTML page using the innerHTML or textContent methods. 

[x] Follow ES6 naming conventions and utilize "use strict" in your code.
*/




//JS statement to assign event listener for functions
var submitButton = document.querySelector("#submit");
var resetButton = document.querySelector("#reset");

//JS statement to assign event listener to happen on 'click'
submitButton.addEventListener("click", stuffArray, false);
resetButton.addEventListener("click", resetScreen, false);

//JS statements to get & display user input
var textInput = document.getElementById("textInput");
//
var displayContent = document.getElementById("displayContent");
//
var count = document.getElementById("count");

//JS Array intialization
const wordsArray = [];
const randomized_WordsArray = [];

//JS Function for EventListener: adds user input into array
function stuffArray(){
    "use strict";

    if(wordsArray.length <= 8){
        wordsArray.push(textInput.value) //adds user input to array

        // game over you've added enough entries (9/9)
        if(wordsArray.length === 9){
            var displayUserInput = shuffledArray(wordsArray); //SHUFFLING ARRAY Function call
            displayContent.innerHTML = displayUserInput; // display results
            count.style.visibility = "hidden";
        }
        
        for(var i = 0; i <= wordsArray.length; i++){
            count.innerHTML = " "+i+"/9 "; // messing around with counting guesses / clicks
        }
    }
    else{
        console.log("Array is full: 9/9 entries.\nCurrent entries:"+wordsArray); 
        console.log("Randomizing output: "+displayUserInput.toString());
    }
}


// SHUFFLE ARRAY FUNCTION
function shuffledArray (newArray){
    "use strict";

    while(newArray.length > 0){
        
        var randomNumber = Math.floor(Math.random() * newArray.length);

        randomized_WordsArray.push(newArray[randomNumber]);

        newArray.splice(randomNumber,1);
    }
    return randomized_WordsArray;
}

//RESET SCREEN 
function resetScreen(){
    "use strict";

    count.style.visibility = "hidden";
    displayContent.style.visibility = "hidden";
    textInput.value = "";
};