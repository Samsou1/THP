require 'pry'

class User
  attr_accessor :email, :age
  @@users = []

  def initialize(email_to_save, age_to_save)
    @email = email_to_save
    @age = age_to_save
    @@users << self
  end

  def self.all
    @@users
  end

  def self.find_by_email(email_address)
    @@users.each { |user| return user if user.email == email_address}
    return "no such email found"
  end

end

# binding.pry