/*
User Story: I can play a game of Tic Tac Toe with the computer. X DONE

User Story: My game will reset as soon as it's over so I can play again. X DONE

User Story: I can choose whether I want to play as X or O. X DONE
*/

var win = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
   [1, 4, 7],
   [2, 5, 8],
   [3, 6, 9],
   [3, 5, 7],
   [1, 5, 9]
];
var movesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var user = [];
var computer = [];
var val;
var userChoice ="X",
   computerChoice = "0";

//arr is either user or computer; arr2 is "movesLeft". returns undefined when you run out of squares to click
function move(arr, arr2, val) {
   if (arr2 !== undefined && arr2.length !== 0) {
      if (arr.indexOf(val) === -1) {
         arr.push(val);
         arr2.splice(arr2.indexOf(val), 1);
         return [arr, arr2];
      }
   }
}

//checks if an array is a winning combination. 
//first argument is an array with the number of moves done and second argument is an array of winning combinations.
function check(arr, arr2) {
   for (var i = 0; i < arr2.length; i++) {
      if (arr.indexOf(arr2[i][0]) !== -1 && arr.indexOf(arr2[i][1]) !== -1 && arr.indexOf(arr2[i][2]) !== -1) {
         return true;
      }
   }
   return false;
}

//resets the board and all the values
function reset() {
   movesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   user = [];
   computer = [];
   for (var i = 1; i < 10; i++) {
      document.getElementById("display").style.visibility = "hidden";
      document.getElementById("sq" + i).innerHTML = "";
      document.getElementById("sq" + i).style.pointerEvents = "auto";
   }
    for (i = 1; i < 10; i++) {
       document.getElementById("sq" + i).style.pointerEvents = "none";
      }
      $(".close").on("click", choose);
}

//returns a random value used for the computer's move. can later be replaced with an AI
function randomMove(arr) {
   var len = arr.length;
   var random = Math.floor(Math.random() * len);
   return arr[random];
}

function computerMove() {
   var moveNumber = randomMove(movesLeft);
   document.getElementById("sq" + moveNumber).innerHTML = computerChoice;
   document.getElementById("sq" + moveNumber).style.pointerEvents = "none";
   var helper = move(computer, movesLeft, moveNumber);
   if (check(computer, win)) {
      document.getElementById("display").style.visibility = "visible";
      document.getElementById("display").innerHTML = "You lost";
      for (var i = 1; i < 10; i++) {
         document.getElementById("sq" + i).style.pointerEvents = "none";
      }
   } else if (movesLeft.length < 1) {
      document.getElementById("display").style.visibility = "visible";
      document.getElementById("display").innerHTML = "Draw";
   }
}

function userMove() {
   val = $(this).attr("value");
   var id = $(this).attr("id");
   document.getElementById(id).innerHTML = userChoice;
   document.getElementById(id).style.pointerEvents = "none";
   val = parseInt(val);
   var helper = move(user, movesLeft, val);
   if (check(user, win) === true) {
      document.getElementById("display").style.visibility = "visible";
      document.getElementById("display").innerHTML = "You Won";
      for (var i = 1; i < 10; i++) {
         document.getElementById("sq" + i).style.pointerEvents = "none";
      }
   } else if (movesLeft.length < 1) {
      document.getElementById("display").style.visibility = "visible";
      document.getElementById("display").innerHTML = "Draw";
   } else {
      computerMove().delay(10000);
   }

}

//user chooses between playing with X or 0
function choose() {
   var value = $(this).attr("value");
   userChoice = value;
   computerChoice = (userChoice === 'X') ? '0': 'X';
   for (var i = 1; i < 10; i++) {
         document.getElementById("sq" + i).style.pointerEvents = "auto";
      }
}

$(document).ready(function() {
   reset();
   $(".square").on("click", userMove);
}); //document ready