module SessionHelper
  def current_user
    User.find_by(id: session[:user_id])
  end

  def log_in(user)
    session[:user_id] = user.id
  end

  def logged_in?
    return false if session[:user_id].class != Integer

    true
  end
end
