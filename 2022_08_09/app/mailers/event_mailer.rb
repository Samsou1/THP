class EventMailer < ApplicationMailer
  default from: 'no-reply@br8ghter.com'

  def confirm_email(event)
    @event = event
    @user = @event.admin
    @url  = "http://localhost:3000/events/#{event.id}"
    mail(to: @user.email, subject: 'Welcome to br8ghter!')
  end
end
