var key = 'ee81fb84082d458a';
var rain = ["Drizzle", "Rain", "Spray", "Rain Showers", "Rain Mist", "Unknown Precipitation", "Freezing Rain", "Squalls"];
var thunderstorms = [
  "Thunderstorm", "Thunderstorms and Rain", "Thunderstorms and Snow", "Thunderstorms and Ice Pellets",
  "Thunderstorms with Hail", "Thunderstorms with Small Hail"
];
var snow = ["Snow Showers", "Snow", "Snow Grains", "Blowing Snow", "Hail", "Small Hail", "Hail Showers Small Hail Showers",
  "Snow Blowing", "Snow Mist", "Ice Pellet Showers", "Freezing Drizzle", "Low", "Drifting Snow"
];
var ice = ["Ice Crystals", "Ice Pellets"];
var fog = ["Mist", "Fog", "Fog Patches", "Haze", "Patches of Fog", "Partial Fog", "Freezing Fog", "Shallow Fog"];
var sand = ["Sand", "Widespread Dust", "Sandstorm", "Low Drifting Widespread Dust", "Low Drifting Sand", "Blowing",
  "Widespread Dust", "Blowing Sand", "Dust Whirls"
];
var smoke = ["Smoke", "Volcanic Ash"];
var cloudy = ["Overcast", "Partly Cloudy", "Mostly Cloudy", "Scattered Clouds", "Funnel Cloud"];
var sunny = ["Clear", "Unknown"];
var current = "";
var degC;
var degF;
var degCfeels;
var degFfeels;
var wK;
var wM;
var celsius = true;

if (location.protocol != 'https:')
{
  alert('Use SSL (https://) in order for the page to work correctly. Update your URL link in your address bar.');
}
// delete this on junne 1.st when all codepen pages will be https

$(document).ready(function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }

  function success(position) {
    $.getJSON('https://api.wunderground.com/api/ee81fb84082d458a/geolookup/conditions/q/' + position.coords.latitude + ',' + position.coords.longitude + '.json', update);
  }

  function update(data) {

    $("#getLocation").html(data.location.city + ', ' + data.location.country_name);
    $("#weather").html(data.current_observation.weather);
    $("#feelsLikeC").html(data.current_observation.feelslike_c + " &degC");
    $(".currentTempC").html(data.current_observation.temp_c + " &degC");
    $('#humidity').html(data.current_observation.relative_humidity);
    $('.windSpeedKm').html(data.current_observation.wind_kph + " km/h");

    current = data.current_observation.weather;
    degC = data.current_observation.temp_c + " &degC";
    degF = data.current_observation.temp_f + " &degF";
    degCfeels = data.current_observation.feelslike_c + " &degC";
    degFfeels = data.current_observation.feelslike_f + " &degF";
    wK = data.current_observation.wind_kph + " km/h";
    wM = data.current_observation.wind_mph + " mi/h";

    //checks for "light" or "heavy" descriptions
    function check(str) {
      if (str.slice(0, 5) === "Light" || str.slice(0, 5) === "Heavy") {
        return true;
      } else {
        return false;
      }
    }

    //returns the current weather without "light" or "heavy"
    if (check(current)) {
      current = current.slice(6, current.length);
    }
    
    //checks if the current weather condition is in a certain weather category
    function checkGroup(str, arr) {
      for (var i = 0; i < arr.length; i++) {
        if (str === arr[i]) {
          return true;
        }
      }
      return false;
    }
    var group = "";

    //returns the weather category
    function returnGroup(current) {
      if (checkGroup(current, rain)) {
        group = "rain";
      } else if (checkGroup(current, thunderstorms)) {
        group = "thunderstorms";
      } else if (checkGroup(current, snow)) {
        group = "snow";
      } else if (checkGroup(current, ice)) {
        group = "ice";
      } else if (checkGroup(current, fog)) {
        group = "fog";
      } else if (checkGroup(current, sand)) {
        group = "sand";
      } else if (checkGroup(current, smoke)) {
        group = "smoke";
      } else if (checkGroup(current, cloudy)) {
        group = "cloudy";
      } else {
        group = "sunny";
        
      }
      return group;
    }
  
returnGroup(current);
    var bUrl = "";
    //returns the url that should be used for the current weather type
    switch (group) {
      case 'rain':
        bUrl = "https://static.pexels.com/photos/8486/water-rain-raindrops-drops.jpg";
        break;
      case 'snow':
        bUrl = "https://static.pexels.com/photos/70234/pexels-photo-70234.jpeg";
        break;
      case 'ice':
        bUrl = "https://static.pexels.com/photos/57812/pexels-photo-57812.jpeg";
        break;
       case 'fog':
        bUrl = "https://static.pexels.com/photos/167699/pexels-photo-167699.jpeg";
        break;
      case 'sand':
        bUrl = "https://static.pexels.com/photos/109031/pexels-photo-109031.jpeg";
        break;
      case 'lightening':
        bUrl = "https://static.pexels.com/photos/167915/pexels-photo-167915.jpeg";
        break;
      case 'cloudy':
        bUrl = "https://static.pexels.com/photos/190886/pexels-photo-190886.jpeg";
        break;
      case 'sunny':
        bUrl = "https://static.pexels.com/photos/109096/pexels-photo-109096.jpeg";
        break;
      default:
        bUrl = "https://static.pexels.com/photos/99551/hot-air-balloon-valley-sky-99551.jpeg";
        break;
    }

    $("img").attr("src", bUrl);
    $("#main").css('background-image', 'url(' + bUrl + ')');
  }

  function error(err) {
    console.log(err.message)
  };

      var click = true;
    $('#wind').on('click', function() {
      if (click === false) {
        $('#wind').html(function() {
          $(this).html("Wind speed<br>" + wK);
          click=true;
           
        });
      } else if (click === true) {
        $('#wind').html(function() {
          $(this).html("Wind speed<br>" + wM);
          click = false;       
        });
      }
    });
  click=false;
      $('#temp').on('click', function() {
      if (click == false) {
        $('#temp').html(function() {
          $(this).html("Temperature<br>" + degF);
          click=true;
           
        });
      } else if (click == true) {
        $('#temp').html(function() {
          $(this).html("Temperature<br>" + degC);
          click = false;
           
        });
      }
    });
    click=false;
      $('#tempFeels').on('click', function() {
      if (click == false) {
        $('#tempFeels').html(function() {
          $(this).html("Feels like<br>" + degFfeels);
          click=true;
           
        });
      } else if (click == true) {
        $('#tempFeels').html(function() {
          $(this).html("Feels like<br>" + degCfeels);
          click = false;      
        });
      }
    });
});