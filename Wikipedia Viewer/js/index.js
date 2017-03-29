// keydown not working
$(document).ready(function() {
  $("#search").on("keydown click", function() {
    $("#resultsText").empty();
    var searchinfo = $("#myField").val(); //test word;modify later
    $.getJSON('//en.wikipedia.org//w/api.php?action=query&list=search&limit=20&profile=normal&srsearch=' + searchinfo + '&format=json&callback=?', function(data) {
      //      console.log(data);//test - displays all data
      for (i = 0; i < 10; i++) {
        document.getElementById("resultsText").innerHTML += "<h6><a href='https://en.wikipedia.org/wiki/" + data.query.search[i].title.split(' ').join('_') + "' target='_blank' a>" + data.query.search[i].title +
          "</a></h6>" + "<p>" + data.query.search[i].snippet + "</p></br>"; //adds search results to html
      } //for loop
    }); //getJSON
  }); //on click function
}); //document.ready