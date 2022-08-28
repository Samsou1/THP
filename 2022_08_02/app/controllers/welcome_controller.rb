class WelcomeController < ApplicationController

  def index
    @name = params[:first_name]
  end

end
