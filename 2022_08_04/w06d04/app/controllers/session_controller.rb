class SessionController < ApplicationController
  def new; end

  def create
    user = User.find_by(email: params[:session_email])

    if user&.authenticate(params[:session_password])
      session[:user_id] = user.id
      @gossips = Gossip.all
      @likes = Like.all
      flash.now[:success] = "Welcome #{user.first_name}. You are now successfully logged in."
      redirect_to :home
    else
      flash.now[:alert] = 'Invalid email/password combination'
      render :new
    end
  end

  def destroy
    session.delete(:user_id)
    @gossips = Gossip.all
    flash.now[:info] = 'You logged out successfully'
    redirect_to :home
  end
end
