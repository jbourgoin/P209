/* PART A
Write a Javascript program that utilizes the method of console.log to write all the numbers from 1 to 300, with two exceptions. For numbers divisible by 5, write "Fizz" instead of the number, and for numbers divisible by 7 (and not 5), write "Fuzz" instead.

https://code.visualstudio.com/docs/nodejs/nodejs-tutorial
*/

for(var i = 0; i < 300; i++){
    if(i % 5){
        console.log("Fizz")
    }
    else if (i % 7){
        console.log("Fuzz")
    }
    else {
        console.log(i+1);
    }
}

/*Part B. 

Write a function called min that takes two arguments and returns their minimum. For example: 

console.log(min(0, 10)); // Will return the value of 0

console.log(min(0, -10)); // Will return the value of -10

console.log(min(240, 918)); // Will return the value of 240

This exercise is from chapter 3 of your Eloquent Javascript book and you will want to reference that chapter for additional information as you create this program. Code the Javascript file and save it with a js extension. You can send me the js file. 
*/