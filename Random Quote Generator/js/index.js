var colors = [
  "#FFA07A",
  "#20B2AA",
  "#AAAAAA",
  "#2E8B57",
  "#008080",
  "#c83349",
  "#841B2D",
  "#7C0A02	",
  "	#007256",
  "#001f3f",
  "#0074D9",
  "#3D9970",
  "#85144b",
  "#FF851B",
  "#FF4136",
  "#007BA7"
];

$(document).ready(function() {
  $("#quote").click(function() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function(response) {
        console.log(response);

        $("#qsigns").addClass("fa fa-quote-left");
        $("#quoteDisplay").html(response.quoteText);
        $("#authorDisplay").html(response.quoteAuthor);
        $(".twitter-share-button").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" + response.quoteText
        );
        if (response.quoteText.length <= 140) {
          currentQuote = response.quoteText + " - " + response.quoteAuthor;
        } else {
          currentQuote = "Ooops! Looks like this quote is too long to tweet!";
        }
      }
    });

    var num = 4;
    function randomColor() {
      num = Math.floor(Math.random() * colors.length);
      return num;
    }

      randomColor();
      $("body").css("background-color", colors[num]);
      $("#quote").css("background-color", colors[num]);
      $("#twitter").css("background-color", colors[num]);
      $("#quoteDisplay").css("color", colors[num]);
      $("#authorDisplay").css("color", colors[num]);
      $("#qsigns").css("color", colors[num]);
  });
});
