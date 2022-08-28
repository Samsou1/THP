class CityController < ApplicationController
  def index; end

  def create; end

  def new; end

  def edit; end

  def show
    puts '##################################################'
    @city = City.where(id: params[:id]).first
    @users = User.where(city_id: params[:id])
    @gossips = Gossip.where(user: @users)
  end

  def update; end

  def destroy; end
end
