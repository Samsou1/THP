class UserController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(
      first_name: params[:first_name],
      last_name: params[:last_name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation],
      city: City.find_or_create_by(name: params[:city])
    )
    if @user.save
      flash.now[:success] = 'User successfully created!'
      redirect_to home_path
    else
      flash.now[:alert] = 'Invalid email/password combination.'
      render new_user_path
    end
  end

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(
      email: params[:email],
      password: params[:password],
      city: City.find_or_create_by(name: params[:city]),
      first_name: params[:first_name],
      last_name: params[:last_name],
      age: params[:age],
      description: params[:description]
    )
    flash.now[:success] = 'User successfully updated!'
      redirect_to user_path(@user.id)
    else
      flash.now[:alert] =
        @user.errors.full_messages.each { |m| puts m }
      render :edit
    end
  end

  def destroy; end
end
