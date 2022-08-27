require "pry"
class User
  attr_writer :mastercard #à mettre en en-tête de ta classe, c'est une variable qu'on ne peut pas lire facilement comme le numéro d'une CB, 
  # ici on déclare une variable de type attr_writer qui s'appelle @mastercard

  attr_reader :birthdate #même principe sauf qu'une variable de type attr_reader ne peut pas être éditée facilement comme une date de naissance

  attr_accessor :email, :encrypted_password #même principe sauf que cette variable d'instance est disponible à l'écriture et à la lecture

  @@user_count = 0

  def greet
    puts "Bonjour, monde !"
  end

  def say_hello_to_someone(first_name)
    puts "Bonjour, #{first_name} !"
  end

  def show_itself
    print "Voici l'instance : "
    puts self
  end

  def update_email(email_to_update)
    @email = email_to_update
  end

  def read_email
    return @email
  end

  def read_mastercard
    return @mastercard
  end

  def update_birthdate(birthdate_to_update)
    @birthdate = birthdate_to_update
  end

  def initialize(email_to_save)
    @email = email_to_save
    @@user_count += 1
    puts "On envoie un email de Bienvenue !!"
  end

  def self.count
    return @@user_count
  end

  def change_password(new_password)
    @encrypted_password = encrypt(new_password)
  end

  private

  def encrypt(string_to_encrypt)
    return "##ENCRYPTED##"
  end
end 

binding.pry
puts "end of file"