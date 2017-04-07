/*
User Story: I am presented with a random series of button presses. X DONE

User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step. X DONE

User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

User Story: I can see how many steps are in the current series of button presses.

User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step. X DONE

User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
*/

//  VARIABLE DECLARATIONS

var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var computer = [],
  user = [];
var counter = 0;
var strict = false;
//  MAIN FUNCTIONS

function random() {
  return Math.floor(Math.random() * 4 + 1);
}

function reset() {
  computer = [];
  user = [];
  counter=0;
}

function computerTurn() {
  computer = computer.push(random());
}

function userTurn() {
  var aux = $(this).attr("value");
  aux = [parseInt(aux)];
  user = user.concat(aux);
}
strict=false;
computer=[1,3,2];
user=[1,3,4];
function strictCheck(){
  if(user[user.length-1]!==computer[computer.length-1]&&strict===true)
    {
      console.log("You lost");//replace with html // losing function
      reset();
} else if (user[user.length-1]!==computer[computer.length-1]&&strict===false){
    user.splice(user.length-1);
  } else {
    counter++;
  }
}




//  DOCUMENT READY

$(document).ready(function() {
  $(".semiCircle").on("click", strictCheck());
}); //document ready