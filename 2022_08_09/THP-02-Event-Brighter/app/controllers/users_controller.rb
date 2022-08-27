class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    @user = User.find(current_user.id)
  end

  def edit
    @user = User.find(current_user.id)
  end

  def update
    @user = User.find(current_user.id)
    if @user.update(
      first_name: params[:first_name],
      last_name: params[:last_name],
      description: params[:description]
    )
      if params[:avatar] != nil
        @user.avatar.attach(params[:avatar])
      end
      flash[:success] = 'User successfully updated!'
      redirect_to profile_path
    else
      @user.errors.full_messages.each { |m| flash.now[:alert] = m }
      render :edit
    end
  end

  def destroy

  end

  private

  def authenticate_user
    return if current_user

    flash[:alert] = 'Please log in.'
    redirect_to new_user_session_path
  end

end
