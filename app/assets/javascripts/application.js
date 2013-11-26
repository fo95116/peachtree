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

     // var $location = $location.val();
     var $location = $location.val().trim().replace(/\s+/g, "_");
     var $state = $state.val().trim().toUpperCase();

     console.log($location)

     // append to div#bucket_items
     // $("#weather").html('<h3> You picked ' + $location + " " + $state + '</h3>')

     $.ajax({
       url : "http://api.wunderground.com/api/441472960cf74c21/conditions/q/"+ $state + "/" + $location + ".json",
       dataType : "jsonp",
       success : function(parsed_json) {
         var city = parsed_json['current_observation']['display_location']['city']
         var temp_f = parsed_json['current_observation']['temp_f'];
         var weather = parsed_json['current_observation']['weather']
         $('#weather').html('<h3>The temp of ' + city + " is " + temp_f +
         " and is " + weather + '</h3>')
         console.log(parsed_json)
       }
     });

  })


});




