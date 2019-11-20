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
let cc;

$("button").click(function(){
if (computer <= .3333){
    cc = ("rock");
    $("#computerChoice").html(choices[0]);
} else if (computer >.3333 && computer < .6666){
    cc = ("paper");
    $("#computerChoice").html(choices[1]);
} else if (computer >.6666 && computer < .9999){
    cc = ("scissor");
    $("#computerChoice").html(choices[2]);
}



let Uinput = $("#input").val().toLowerCase();

 
 


 

if ((Uinput) === ("rock") && cc === ("rock")){
    $("#result").html("tie");
    $("#userChoice").html("rock");
} else if ((Uinput) === ("rock")&& cc === ("paper")){
    $("#result").html("computer wins");
    $("#userChoice").html("rock");
}else if ((Uinput) === ("rock") && cc === ("scissor")){
    $("#result").html("human wins");
    $("#userChoice").html("rock");
}else if ((Uinput) === ("paper") && cc === ("rock")){
    $("#result").html("human win");
    $("#userChoice").html("paper");
} else if ((Uinput) === ("paper") && cc === ("paper")){
    $("#result").html("tie");
    $("#userChoice").html("paper");
}else if ((Uinput) === ("paper") && cc === ("scissor")){
    $("#result").html("cumputer wins");
    $("#userChoice").html("paper");
}else if ((Uinput) === ("scissors") && cc === ("rock")){
    $("#result").html("computer wins");
    $("#userChoice").html("scissors");
} else if ((Uinput) === ("scissors") && cc === ("paper")){
    $("#result").html("human wins");
    $("#userChoice").html("scissors");
}else if ((Uinput) === ("scissors") && cc === ("scissor")){
    $("#result").html("tie");
    $("#userChoice").html("scissors");

}
});
