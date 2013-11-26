class EnvironmentsController < ApplicationController

require 'open-uri'

  def index
    # render json: '/environments'
  end

# def index
#   open('http://api.wunderground.com/api/441472960cf74c21/geolookup/conditions/q/IA/Cedar_Rapids.json') do |f|
#     json_string = f.read
#     parsed_json = JSON.parse(json_string)
#     location = parsed_json['location']['city']
#     temp_f = parsed_json['current_observation']['temp_f']
#     print "Current temperature in #{location} is: #{temp_f}\n"

#    render json: temp_f
#   end

# end

end
