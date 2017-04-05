/*
User Story: I can play a game of Tic Tac Toe with the computer. X DONE

User Story: My game will reset as soon as it's over so I can play again. X DONE

User Story: I can choose whether I want to play as X or O.
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
var userChoice="X", computerChoice="0";
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
   for(var i=1;i<10;i++){
      document.getElementById("display").innerHTML = "";
      document.getElementById("sq"+i).innerHTML = "";
      document.getElementById("sq"+i).style.pointerEvents = "auto";
   }
}

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
      document.getElementById("display").innerHTML = "You lose";
            for(var i=1;i<10;i++){
      document.getElementById("sq"+i).style.pointerEvents = "none";
   }
   } else if (movesLeft.length < 1) {
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
      document.getElementById("display").innerHTML = "You Win";
      for(var i=1;i<10;i++){
      document.getElementById("sq"+i).style.pointerEvents = "none";
   }
   } else if (movesLeft.length < 1) {
      document.getElementById("display").innerHTML = "Draw";
   } else {
      //console.log(user);//test
      //console.log(movesLeft);//test
      computerMove().delay(3000);
   }

}

$(document).ready(function() {
   $(".square").on("click", userMove);

}); //document ready