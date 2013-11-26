class EnvironmentsController < ApplicationController

  def index
    w_api = Wunderground.new('441472960cf74c21')
    wrapper_instance.[conditions]_and_[forecast]_for(san francisco)
  end

end
