
/*Part B. 

Write a function called min that takes two arguments and returns their minimum. For example: 

console.log(min(0, 10)); // Will return the value of 0

console.log(min(0, -10)); // Will return the value of -10

console.log(min(240, 918)); // Will return the value of 240

This exercise is from chapter 3 of your Eloquent Javascript book and you will want to reference that chapter for additional information as you create this program. Code the Javascript file and save it with a js extension. You can send me the js file. 
*/
min(0, 10); // Will return the value of 0

min(0, -10); // Will return the value of -10

min(240, 918); // Will return the value of 240


function min(firstnum, secondnum){
    if(firstnum < secondnum){
        console.log(firstnum);
    }
    else if (firstnum > secondnum) {
        console.log(secondnum);
    }
    else {
        console.log("Numbers are equal!");
    }
};