class GreetController < ApplicationController
  def welcome
    @name = params[:first_name]
  end
end
