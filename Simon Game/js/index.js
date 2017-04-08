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
  return [Math.floor(Math.random() * 4 + 1)];
}

function reset() {
  computer = [];
  user = [];
  counter = 0;
  $(".start").on("click", start);
}

function computerTurn() {
  computer = computer.concat(random());
  console.log("computer: " + computer); //test

}

function userTurn() {
  var aux = $(this).attr("value");
  aux = [parseInt(aux)];
  user = user.concat(aux);
  console.log("user: " + user); //test
}

function check(user, computer) {
  if (counter < 20) {
    if (user[user.length - 1] === computer[computer.length - 1]) {
      //if last move si correct do this
      user = [];
      counter++;
      // if last move is incorrect, do things
    } else if (user[user.length - 1] !== computer[computer.length - 1]) {
      if (strict === true) {
        //if last move is wrong do things
        //if strict is true do things
        console.log("You lose");
      } else if (strict === false) {
        //if last move is wrong do things
        //if strict is false do things
      }
    }
  } else if (counter === 20) {
    console.log("You won!");
    //winning function
    //click anywhere for reset
  }
}

function start() {
  if(computer.length<1){
      computerTurn();
  }
  if (user.length < computer.length) {
    $(".semiCircle").on("click", userTurn);
  } else if (user.length === computer.length) {
    check(user, computer);
  }
}

//  DOCUMENT READY

$(document).ready(function() {

  $("div").on("click", start);
}); //document ready