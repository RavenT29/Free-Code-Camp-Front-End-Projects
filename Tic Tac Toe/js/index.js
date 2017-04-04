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

/*
    $("button").click(function() {
      var clickedButton = $(this).val();
*/

//arr is either user or computer; arr2 is moves left. returns undefined when double clicked or when you run out of squares to click
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

function reset() {
   movesLeft = [1, 2, 3, 4, 5, 6, 7, 8, 9];
   user = [];
   computer = [];
   //ask about X and 0
}

function randomMove(arr) {
   var len = arr.length;
   var random = Math.floor(Math.random() * len);
   return arr[random];
}

function computerMove() {
   var moveNumber = randomMove(movesLeft);
   $("#sq"+moveNumber).html("0");
   var helper = move(computer, movesLeft, moveNumber);
   if (check(computer, win)) {
      document.getElementById(display).innerHTML = "You lose";
   } else if (movesLeft === []) {
      document.getElementById(display).innerHTML = "Draw";
   }
   $(".square").on("click", userMove);
}

function userMove() {
   val = $(this).attr("value");
   var id=$(this).attr("id");
   document.getElementById(id).innerHTML = "X";
   val = parseInt(val);
   var helper = move(user, movesLeft, val);
   if (check(user, win) === true) {
      document.getElementById(display).innerHTML = "Win"; //add return winning function and reset 
   } else if (movesLeft === undefined || movesLeft.length === 0) {
      document.getElementById(display).innerHTML = "Draw"; //add return draw function and reset
   }
    computerMove();
}

$(document).ready(function() {
   $(".square").on("click", computerMove);

}); //document ready