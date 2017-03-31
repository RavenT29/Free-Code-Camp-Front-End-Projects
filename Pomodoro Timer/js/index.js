$(document).ready(function() {
  //there is a SESSION and a BREAK
  /* 
    NOTATIONS:
  seconds=sec;
  minutes=min;
  session=S;
  break=B;

    MAIN FUNCTIONS:
  startS;
  startB;
  display;
  counter: seconds
  */

  var timer = 0;

  function startTimer(seconds) {
    var min = seconds / 60,
      leftSec = seconds % 60,
      if (leftSec < 10) {
        leftSec = '0' + leftSec;
      }
    display.innerHtml = min + ":" + lefSec;
  }

  function startS() {
    clearInterval(timer);
    timer = setInterval(function() {
      startTimer(seconds);
      if (seconds === 0) {
        clearInterval(timer);
        display();
        leftS = left * 60;
        startB();
      } else {
        seconds--;
      }, 1000));
    display();
  });

function display(seconds) {
  document.getElementById("display").innerHTML += seconds;
}
}

}); //document ready