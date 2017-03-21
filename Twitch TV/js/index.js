/*NOTE:
This server caches data to lower the request rate. To prevent abuses this server accepts GET requests only, and serves only routes /users/:user, /channels/:channel, and /streams/:stream. These are more than enough to complete the challenge.
User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.//streaming

User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.//link

User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.//details

User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.//placeholder if false display text
*/
var user = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
var streaming = true;
var status;
var details;
var notification = true;
var link;
var nameC;
var views;
var language;
$(document).ready(function() {
  $("#main").empty();
  for (i = 0; i < user.length; i++) {
    var a = $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user[i] + '?callback=?', function(data) {});
    var b = $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + user[i] + '?callback=?', function(data) {});
    var c = $.getJSON('https://wind-bow.gomix.me/twitch-api/users/' + user[i] + '?callback=?', function(data) {});
    $.when(a, b, c).done(function(aData, bData, cData) { //when all request are successful
      //         console.log(cData[0]);
      if (cData[0].status === 422 || cData[0].status === 404) {
        document.getElementById("main").innerHTML += "<div><h2>" + user[i] + "</h2><p>User has closed their Twitch account</p></div>";
      } else {
        status = bData[0].status;
        views = bData[0].views;
        language = bData[0].language;
        details = bData[0].game;
        link = "https://www.twitch.tv/" + bData[0].name;
        nameC = bData[0].display_name;
        if (aData[0].stream != null) {
          document.getElementById("main").innerHTML += "<div><h2>" + nameC + "</h2><p><span><a href='" + link + "' target='_blank'>Status:</span> " + status + "</a><p><span>Number of views:</span> " + views + "</p><p><span>Language:</span> " + language + "</p><p><span>Details:</span> " + details + "</p></div>";
        } else {
          document.getElementById("main").innerHTML += "<div><h2>" + nameC + "</h2><p><span>Status:</span> " + status + "<p><span>Number of views:</span> " + views + "</p><p><span>Language:</span> " + language + "</p><p><span>Details:</span> " + details + "</p></div>";
        }
      } //if
    }); //when function
  } //main for function
}); //document ready