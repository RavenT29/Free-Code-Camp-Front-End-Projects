/*
User Story: I am presented with a random series of button presses. X DONE

User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step. X DONE

User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button. X DONE

User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again. 

User Story: I can see how many steps are in the current series of button presses. 

User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step. X DONE

User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses. X DONE

User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.
*/

//  VARIABLE DECLARATIONS

var audio1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"),
    audio2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"),
    audio3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"),
    audio4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var soundArray = [audio1, audio2, audio3, audio4];
var sequence = [],
    user = [];
var roundNum = 1,
    counter = 1;
var strict = true;
var i = 0;
var moves;
//  MAIN FUNCTIONS

function reset() {
    sequence = [];
    user = [];
    roundNum = 1;
}

function generateSequence() {
    var i = 0;
    while (i < 20) {
        i++;
        var aux = [Math.floor(Math.random() * 4 + 1)];
        sequence = $.merge(sequence, aux);
    }
    console.log(sequence); //test
}

function round() {
    var value = $(this).attr("value");
    value = parseInt(value);
    click(value);

    if (user.length < roundNum) {

        if (value === sequence[counter - 1]) {
            user = $.merge(user, [value]);
        } else if (value !== sequence[counter - 1]) {
            if (strict) {
                counter = 1;
                console.log("You lost!");

            } else {
                counter = 1;
                console.log("Animate again!");
            }
        }
    }
    if (user.length === roundNum && roundNum < 20) {

        console.log("You won this round");
        user = [];
        roundNum++;
        animate();

    } else if (user.length < roundNum) {
        counter++;
    } else if (user.length === roundNum && roundNum === 20) {
        console.log("You won the game");
    }
}

function animate() {
    var i = -1;
    moves = setInterval(function() {
        i++;
        if (i >= roundNum) {
        clearInterval(moves);
        }
        $("#id"+(sequence[i-1])).addClass('hover');
  setTimeout(function(){
      $("#id"+(sequence[i-1])).removeClass('hover');
  }, 500);  
        click(sequence[i-1]).play();
    }, 800);
}

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

    generateSequence();

    $(".semiCircle").on("click", round);

}); //document ready

//("audio"+"value").play();