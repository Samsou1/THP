def ftoc(number)
  (number - 32) * (5.to_f / 9)
end

def ctof(number)
  number * 1.8 + 32
end

# puts 'Bonjour, veuillez noter le numéro de la fonction que vous souhaitez tester ?'
# puts '1 - Fonction qui vous permet de transformer une température Fahrenheit en Celcius'
# puts '2 - Fonction qui vous permet de transformer une température Celcius en Fahrenheit'
# a = gets.chomp.to_i
# if a == 1
#   puts 'Quel est votre température à convertir ?'
#   print '>'
#   puts ftoc(gets.chomp.to_f)
# elsif a == 2
#   puts 'Quel est votre température à convertir ?'
#   print '>'
#   puts ctof(gets.chomp.to_f)
# else
#   puts 'Erreur, veuillez essayer avec le numéro de fonction'
# end
