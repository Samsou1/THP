class UserMailer < ApplicationMailer
  default from: 'no-reply@br8ghter.com'

  def welcome_email(user)
    @user = user
    @url  = 'http://localhost:3000/login'
    mail(to: @user.email, subject: 'Welcome to br8ghter!')
  end
end
