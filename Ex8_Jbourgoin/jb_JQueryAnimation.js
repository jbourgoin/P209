$(function() {
    'use strict';
    
//button1
    $('#myButton1').on('click', shrinkingTree)
    
    function shrinkingTree(){
        console.log("Shrink Animation");
        let $img = $('#tree');
        $img.animate({width : '-=1900'}, 2000);
        $img.animate({width : '+=180'}, 2000);
    }    
//button2
    $('#myButton2').on('click', fadeOutFunction)
    
    function fadeOutFunction(){
        console.log("Fade out and in Animation");
        let $img = $('#tree');
        $img.fadeOut().fadeIn();
    } 
//button3
    $('#myButton3').on('click', fadeToggle)
    
    function fadeToggle(){
        console.log("Fade Toggle Animation");
        let $img = $('#tree');
        $img.fadeToggle();
    }  
});
