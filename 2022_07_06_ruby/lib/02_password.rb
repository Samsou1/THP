def signup
  puts "Bonjour, veuillez créer votre mot de passe"
  print '>'
  password = gets.chomp
  password
end

def login
  password_try = ""
  while password_try =! password
    puts "Veuillez renseigner votre mot de passe"
    password_try = gets.chomp
  end
end

def welcome_screen
  puts "Bienvenue sur votre espace secret, voici les différentes info récoltées jusqu'à présent"
  puts "GitHub c'est horrible jusqu'au moment où on galère"
  puts ""
end



def perform
  a = signup
  login
  welcome_screen
end