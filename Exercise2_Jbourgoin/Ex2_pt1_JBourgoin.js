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