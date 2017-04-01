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
    min = 25, //number of minutes in as session
    seconds = min * 60, //number of seconds in a session
    breaks = 5, //number of minutes in a break
    breakSeconds = breaks * 60, //number of seconds in a break
    mySound = new Audio("http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Electronic/Beeps/Electron-wwwbeat-8521/Electron-wwwbeat-8521_hifi.mp3");

  //  BUTTONS AND GETTING NEW VALUES

  function displayMinSession(min) {
    document.getElementById("sessionLen").innerHTML = "<p>" + min + "</p>";
    $("#sessionMinus").on("click", function() {
      if (min === 0) {
        document.getElementById("sessionLen").innerHTML = "<p>" + min + "</p>";
        return min;
      } else {
        document.getElementById("sessionLen").innerHTML = "<p>" + min + "</p>";
        return min--;
      }
    });
    $("#sessionPlus").on("click", function() {
      if (min > 59) {
        document.getElementById("sessionLen").innerHTML = "<p>" + min + "</p>";
        return min;
      } else {
        document.getElementById("sessionLen").innerHTML = "<p>" + min + "</p>";
        return min++;
      }
    });
  }

  function displayMinBreak(breaks) {
    document.getElementById("breakLen").innerHTML = "<p>" + breaks + "</p>";
    $("#breakMinus").on("click", function() {
      if (breaks === 0) {
        document.getElementById("breakLen").innerHTML = "<p>" + breaks + "</p>";
      } else {
        breaks--;
        document.getElementById("breakLen").innerHTML = "<p>" + breaks + "</p>";
      }
    });
    $("#breakPlus").on("click", function() {
      if (breaks > 59) {
        document.getElementById("breakLen").innerHTML = "<p>" + breaks + "</p>";
      } else {
        breaks++;
        document.getElementById("breakLen").innerHTML = "<p>" + breaks + "</p>";
      }
    });
  }
  

  $("#start").on("click", function() {
    seconds = min * 60,
      breakSeconds = breaks * 60
      //GET SESSION LENGTH AND BREAK AND NUMBER OF SESSIONS HERE!!!
    startS(seconds, breakSeconds);
  });

  //  TIMER FUNCTIONALITY  

  function startTimer(seconds) {
    min = seconds / 60;
    leftSec = seconds % 60;
  }

  //runs timer for a session; plays sound in the last 3 seconds

  function startS(seconds, breakSeconds) {
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
    }, 80); //   CHANGE THIS NUMBER!!!!!!
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
      } else {
        if (seconds < 4) mySound.play();
        display(seconds);
        return seconds--;
      }
    }, 80); //   CHANGE THIS NUMBER!!!!!!
  }

  //displays countdown numbers

  function display(seconds) {
    var displaySec = seconds % 60;
    var displayMin = Math.floor(seconds / 60);
    if (displaySec < 10) displaySec = '0' + displaySec;
    if (displayMin < 10) displayMin = '0' + displayMin;
    document.getElementById("display").innerHTML = displayMin + " : " + displaySec;
  }

}); //document ready