// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require foundation
//= require_tree .

$(function(){ $(document).foundation(); });

$(function() {

  // $.ajax({
  //   url : "http://api.wunderground.com/api/441472960cf74c21/geolookup/conditions/q/IA/Cedar_Rapids.json",
  //   dataType : "jsonp",
  //   success : function(parsed_json) {
  //   var location = parsed_json['location']['city'];
  //   var temp_f = parsed_json['current_observation']['temp_f'];
  //   // alert("Current temperature in " + location + " is: " + temp_f);
  //   $('#weather').html('<h3>The Complete Works of ' + location + temp_f + '</h3>')
  //   console.log(parsed_json)
  //   }
  // });

  $('input[name="commit"]').click(function(event) {
    event.preventDefault();

    var $location = $("#location");
    var $state = $("#state");
    var params = { location: { title: $location.val()} }
    var visibility = ['Light Mist', 'Heavy Mist', 'Light Fog', 'Heavy Fog', 'Light Fog Patches',
    'Heavy Fog Patches', 'Patches of Fog', 'Shallow Fog', 'Partial Fog', 'Overcast', 'Light Haze',
    'Heavy Haze'];
    var green = ['Clear', 'Partly Cloudy', 'Mostly Cloudy', 'Scattered Clouds'];
    var red = ['Light Drizzle', 'Heavy Drizzle', 'Light Rain', 'Heavy Rain', 'Light Snow', 'Heavy Snow',
    'Light Snow Grains', 'Heavy Snow Grains', 'Light Ice Crystals', 'Heavy Ice Crystals', 'Light Ice Pellets',
    'Heavt Ice Pellets', 'Light Hail', 'Heavy Hail', 'Light Snow Showers', 'Heavy Snow Showers', 'Light Snow Blowing Snow Mist',
    'Heavy Snow Blowing Snow Mist', 'Light Ice Pellet Showers', 'Heavy Ice Pellet Showers', 'Light Hail Showers',
    'Heavy Hail Showers', 'Light Small Hail Showers', 'Heavy Small Hail Showers', 'Light Thunderstorm',
    'Heavy Thunderstorm', 'Light Thunderstorms and Rain', 'Heavy Thunderstorms and Rain', 'Light Thunderstorms and Snow',
    'Heavy Thunderstorms and Snow', 'Light Thunderstorms and Ice Pellets', 'Heavy Thunderstorms and Ice Pellets',
    'Light Thunderstorms with Hail', 'Heavy Thunderstorms with Hail', 'Light Thunderstorms with Small Hail',
    'Heavy Thunderstorms with Small Hail', 'Light Freezing Drizzle', 'Heavy Freezing Drizzle', 'Light Freezing Rain',
    'Heavy Freezing Rain', 'Light Freezing Fog', 'Heavy Freezing Fog'];
    var danger = ['Light Volcanic Ash', 'Heavy Volcanic Ash', 'Light Widespread Dust', 'Heavy Widespread Dust',
    'Light Sand', 'Heavy Sand', 'Light Spray', 'Heavy Spray', 'Light Dust Whirls', 'Heavy Dust Whirls',
    'Light Sandstorm', 'Heavy Sandstorm'];
     // var $location = $location.val();
     var $location = $location.val().trim().replace(/\s+/g, "_");
     var $state = $state.val().trim().toUpperCase();

     console.log($location)

     $.ajax({
       url : "http://api.wunderground.com/api/441472960cf74c21/conditions/q/"+ $state + "/" + $location + ".json",
       dataType : "jsonp",
       success : function(parsed_json) {
         var city = parsed_json['current_observation']['display_location']['city']
         var temp_f = parsed_json['current_observation']['temp_f'];
         var weather = parsed_json['current_observation']['weather']
         $('#weather').html('<h3>' + city + "<br>" + "Temperature: " + temp_f + " F" +
         "<br>" + weather + '</h3>');
         console.log(parsed_json);
         console.log(weather);
         console.log(temp_f);
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         _.each(green, function(item) {
          console.log(item);
            if(weather == item) {
              $('#condition').html('<p> Have a good Workout!</p>');
            }
         })
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         _.each(red, function(x) {
            console.log(x);
            if(weather == x) {
              $('#condition').html('<p> dont run fool! </p>');
            }
         })
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         _.each(visibility, function(y) {
            console.log(y);
            if(weather == y) {
              $('#condition').html('<p> Wear some 3M fool!</p>');
            }
         })
         //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
         _.each(danger, function(z) {
            console.log(z);
            if(weather == z) {
              $('#condition').html('<p> Stay Home!</p>');
            }
         })
         //+++++++++++++++++++++++++++++++++++++++++++++++++
         if(temp_f > 70 && temp_f < 98) {
          $('#shelter').html('<p> its perfect</p>')
         }
         else if(temp_f > 45 && temp_f < 70) {
          $('#shelter').html('<p> burr its cold </p>')
         }
         else if(temp_f < 45) {
          $('#shelter').html('<p> ahh its cold</p>')
         }
         else if(temp > 98) {
          $('#shelter').html('<p> its burning hot</p>')
         }
         //++++++++++++++++++++++++++++++++++++++++++++++++
       }
     });

  })
});




