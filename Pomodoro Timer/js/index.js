/*

User Story: I can start a 25 minute pomodoro, and the timer will go off once 25 minutes have elapsed.  X DONE

User Story: I can reset the clock for my next pomodoro.   X DONE

User Story: I can customize the length of each pomodoro.   X DONE

*/

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

  //  VARIABLE DECLARATIONS AND DEFAULT VALUES

  var timer = 0,
    leftSec = 0,
    numberS = 4, //number of session-break pairs
    min = 2, //number of minutes in as session
    seconds = min * 60, //number of seconds in a session
    breaks = 1, //number of minutes in a break
    breakSeconds = breaks * 60, //number of seconds in a break
    mySound = new Audio("http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Electronic/Beeps/Electron-wwwbeat-8521/Electron-wwwbeat-8521_hifi.mp3");

  //  BUTTONS AND GETTING NEW VALUES

  function displayMinSession(min) {
    document.getElementById("sessionLen").innerHTML = "<p id='idSession'>" + min + "</p>";
    reset();
    $("#sessionMinus").on("click", function() {
      if (min === 0) {
        document.getElementById("sessionLen").innerHTML = "<p id='idSession'>" + min + "</p>";
        reset();
      } else {
        min--;
        document.getElementById("sessionLen").innerHTML = "<p id='idSession'>" + min + "</p>";
        reset();
      }
    });
    $("#sessionPlus").on("click", function() {
      if (min > 59) {
        document.getElementById("sessionLen").innerHTML = "<p id='idSession'>" + min + "</p>";
        reset();
      } else {
        min++;
        document.getElementById("sessionLen").innerHTML = "<p id='idSession'>" + min + "</p>";
        reset();
      }
    });
  }

  function displayMinBreak(breaks) {
    document.getElementById("breakLen").innerHTML = "<p id='idBreaks'>" + breaks + "</p>";
    $("#breakMinus").on("click", function() {
      if (breaks === 0) {
        document.getElementById("breakLen").innerHTML = "<p id='idBreaks'>" + breaks + "</p>";
      } else {
        breaks--;
        document.getElementById("breakLen").innerHTML = "<p id='idBreaks'>" + breaks + "</p>";
      }
    });
    $("#breakPlus").on("click", function() {
      if (breaks > 59) {
        document.getElementById("breakLen").innerHTML = "<p id='idBreaks'>" + breaks + "</p>";
      } else {
        breaks++;
        document.getElementById("breakLen").innerHTML = "<p id='idBreaks'>" + breaks + "</p>";
      }
    });
  }

  $("#start").on("click", function() {
    startS(seconds, breakSeconds);
  });
/*  
$('#pause').click(function(){
    // Clear the timeout
    clearTimeout(timer);
});
  
  $('#restart').click(function(){
    // Clear the timeout
    startS();
});
*/
  $('div').on("click", displayMinSession(min));
  $('div').on("click", displayMinBreak(breaks));

  //  TIMER FUNCTIONALITY  

  function startTimer(seconds) {
    min = seconds / 60;
    leftSec = seconds % 60;
  }

  //runs timer for a session; plays sound in the last 3 seconds

  function startS() {
    seconds = parseInt(document.getElementById("idSession").innerHTML) * 60;
    breakSeconds = parseInt(document.getElementById("idBreaks").innerHTML) * 60;
    console.log(seconds / 60);
    clearInterval(timer);
    timer = setInterval(function() {
      startTimer(seconds);
      if (seconds === 0) {
        mySound.play();
        clearInterval(timer);
        display(seconds);
        startB(breakSeconds);
      } else {
        if (seconds < 4) mySound.play();
        display(seconds);
        return seconds--;
      }
    }, 1000); //   CHANGE THIS NUMBER!!!!!!
  }

  //runs timer for a break; plays sound in the last 3 seconds

  function startB(seconds) {
    clearInterval(timer);
    timer = setInterval(function() {
      startTimer(seconds);
      if (seconds === 0) {
        mySound.play();
        clearInterval(timer);
        display(seconds);
        startS();
      } else {
        if (seconds < 4) mySound.play();
        display(seconds);
        return seconds--;
      }
    }, 1000); //   CHANGE THIS NUMBER!!!!!!
  }

  //displays countdown numbers

  function display(seconds) {

    var displaySec = seconds % 60;
    var displayMin = Math.floor(seconds / 60);
    if (displaySec < 10) displaySec = '0' + displaySec;
    if (displayMin < 10) displayMin = '0' + displayMin;
    document.getElementById("display").innerHTML = displayMin + " : " + displaySec;
  }

  function reset() {
    var resetMinutes = parseInt(document.getElementById("idSession").innerHTML);
    if (resetMinutes < 10) resetMinutes = '0' + resetMinutes;
    document.getElementById("display").innerHTML = resetMinutes + " : 00";
  }

}); //document ready