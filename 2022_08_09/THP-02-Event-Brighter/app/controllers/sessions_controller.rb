class SessionsController < ApplicationController
  def destroy
    log_out(current_user)
    flash[:info] = 'You logged out successfully'
    redirect_to :root
  end
end
