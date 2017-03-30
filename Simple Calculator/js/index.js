$(document).ready(function() {
  //function getInfo takes the value of the buttons clicked.
  var strCalc = '';
  var previously = false;

  function getInfo() {
    $("button").click(function() {
      var clickedButton = $(this).val();

      //if value is '=' it returns the result
      if (clickedButton === "=") {
        strCalc = eval(strCalc).toFixed(2);
        previously = true;
        //console.log(strCalc); //test
        document.getElementById("display").innerHTML = strCalc;
        //if value is 'remove' it cleares the text
      } else if (clickedButton === "remove") {
        strCalc = "";
        //console.log(strCalc); //test
        document.getElementById("display").innerHTML = strCalc;
        //adds clicked value to a string with previous values and operations
      } else {
        //if the previoulsy clicked button was '=' strCalc is reset to an empty string
        if (previously) {
          strCalc = '';
          strCalc = strCalc.concat(clickedButton);
          previously = false;
          //console.log(strCalc); //test
          document.getElementById("display").innerHTML = strCalc;
        } else {
          strCalc = strCalc.concat(clickedButton);
          //console.log(strCalc); //test
          document.getElementById("display").innerHTML = strCalc;
        }

      }
    });

  }; //get info
  $(".btn").on("click", getInfo());

}); //document ready