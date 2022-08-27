class UserController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new
  end

  def new; end

  def edit; end

  def show
    @user = User.find_by_id(params[:id])
  end

  def update; end

  def destroy; end
end
