// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var humanscore=0;
var computerscore=0;
let choices= ["rock","paper","scissors"];
let computer = Math.random();
let human;

if (computer === .3333){
    console.log("rock");
} else if (computer >.3333 && computer < .6666){
    console.log("paper");
} else (computer >.6666 && computer < .9999)



$("button").click(function(){
 $("#result").html("#input");
 console.log("hi");


 

if (human === rock && computer === rock){
    $("#result").html("tie");
} else if (human === rock && computer === paper){
    $("#result").html("computer wins");
}else if (human === rock && computer === scissors){
    $("#result").html("human wins");
}else if (human === paper && computer === rock){
    $("#result").html("tie");
} else if (human === paper && computer === paper){
    $("#result").html("computer wins");
}else if (human === paper && computer === scissors){
    $("#result").html("human wins");
}else if (human === scissors && computer === rock){
    $("#result").html("tie");
} else if (human === scissors && computer === paper){
    $("#result").html("computer wins");
}else if (human === scissors && computer === scissors){
    $("#result").html("human wins");
}
});
