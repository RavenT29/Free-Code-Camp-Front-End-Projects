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

/*
    $("button").click(function() {
      var clickedButton = $(this).val();
*/

//arr is either user or computer; arr2 is moves left
function move(arr, arr2) {
  arr.push(val);
  arr2.splice(arr2.indexOf(val), 1);
  return [arr, arr2];
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
  commputer = [];
  //ask about X and 0
}

function randomMove(arr){
  var len=arr.length;
  var random=Math.floor(Math.random()*len);
  return arr[random];
}

$(document).ready(function() {
 $(".square").on("click", function() {
    val= $(this).attr("value");
    val= parseInt(val);
    return val;
  });

  function game() {
    
  }//game

}); //document ready