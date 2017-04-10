/*
User Story: I am presented with a random series of button presses. 
User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step. 
User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button. 
User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again. 
User Story: I can see how many steps are in the current series of button presses.
User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step. 
User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
*/

//  VARIABLE DECLARATIONS

var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
  audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
  audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
  audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"),
  lose = new Audio("http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Beeps/Button_B-socreati-8992/Button_B-socreati-8992_hifi.mp3");
var sequence = [],
  user = [];
var roundNum = 1,
  counter = 1,
  i = 0;
var strict = false;
var moves;

//  MAIN FUNCTIONS

//resets all game values and reactivates buttons

function reset() {
  sequence = [];
  user = [];
  roundNum = 1;
  document.getElementById("id1").style.pointerEvents = "auto";
  document.getElementById("id2").style.pointerEvents = "auto";
  document.getElementById("id3").style.pointerEvents = "auto";
  document.getElementById("id4").style.pointerEvents = "auto";
  $("#win").removeClass('win');
}

//generates a sequence of 20 numbers. animates the button corresponding to the first number in the sequence

function generateSequence() {
  var i = 0;
  while (i < 20) {
    i++;
    var aux = [Math.floor(Math.random() * 4 + 1)];
    sequence = $.merge(sequence, aux);
  }

  $("#id" + (sequence[0])).addClass('hover');
  setTimeout(function() {
    $("#id" + (sequence[0])).removeClass('hover');
  }, 500);
  click(sequence[0]);
}

//plays each round of the game

function round() {
  var value = $(this).attr("value");
  value = parseInt(value);
  click(value);

  if (user.length < roundNum) {
    console.log("counter " + sequence[counter - 1]);
    if (value === sequence[counter - 1]) {
      user = $.merge(user, [value]);
    } else if (value !== sequence[counter - 1]) {
      if (strict) {
        counter = 1;
        console.log("You lost!");
        lose.play();
        document.getElementById("id1").style.pointerEvents = "none";
        document.getElementById("id2").style.pointerEvents = "none";
        document.getElementById("id3").style.pointerEvents = "none";
        document.getElementById("id4").style.pointerEvents = "none";
        document.getElementById("counter").innerHTML = "--";
      } else {
        lose.play();
        animate();
        user = [];
        counter = 0;
        console.log("Animate again!");
      }
    }
  }
  if (user.length === roundNum && roundNum < 20) {

    console.log("You won this round");
    user = [];
    roundNum++;
    document.getElementById("counter").innerHTML = roundNum;
    counter = 1;
    animate();
  } else if (user.length < roundNum) {
    counter++;
  } else if (user.length === roundNum && roundNum === 20) {
    $("#win").addClass('win');
  }
}

//animates buttons

function animate() {
  var i = -1;
  moves = setInterval(function() {
    i++;
    if (i >= roundNum) {
      clearInterval(moves);
    }
    $("#id" + (sequence[i - 1])).addClass('hover');
    setTimeout(function() {
      $("#id" + (sequence[i - 1])).removeClass('hover');
    }, 500);
    click(sequence[i - 1]).play();
  }, 800);
}

//plays sounds corresponding to given value;

function click(val) {
  if (val === 1) {
    audio1.play();
  } else if (val === 2) {
    audio2.play();
  } else if (val === 3) {
    audio3.play();
  } else if (val === 4) {
    audio4.play();
  }
}

//  DOCUMENT READY

$(document).ready(function() {
  
  $("#win").removeClass('win');

  //activates all buttons

  document.getElementById("id1").style.pointerEvents = "none";
  document.getElementById("id2").style.pointerEvents = "none";
  document.getElementById("id3").style.pointerEvents = "none";
  document.getElementById("id4").style.pointerEvents = "none";

  //starts game

  $(".start").on("click", function() {
    document.getElementById("counter").innerHTML = 1;
    reset();
    strict = false;
    generateSequence();

  });

  //starts game in strict mode

  $(".strict").on("click", function() {
    if (strict === false) {
      strict = true;
      $(".strict").addClass('hover');
    } else {
      strict = false;
      $(".strict").removeClass('hover');
    }
    document.getElementById("counter").innerHTML = 1;
    reset();
    generateSequence();
  });

  $(".semiCircle").on("click", round);

}); //document ready