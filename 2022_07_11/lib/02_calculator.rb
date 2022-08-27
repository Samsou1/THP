def add(num1, num2)
  num1 + num2
end

def subtract(num1, num2)
  num1 - num2
end

def sum(array)
  if array.any?
    array.reduce { |sum, num| sum + num }
  else
    0
  end
end

def multiply(num1, num2)
  num1 * num2
end

def power(num1, num2)
  num1**num2
end

def factorial(num1)
  num1.zero? ? 1 : num1 * factorial(num1 - 1)
end

# puts 'Bonjour, veuillez noter le numéro de la fonction que vous souhaitez tester ?'
# puts '1 - Fonction qui vous permet de faire la somme de 2 nombres'
# puts '2 - Fonction qui vous permet de soustraire 2 nombres'
# puts '3 - Fonction qui vous permet de faire la somme de plusieurs nombres dans un array'
# puts '4 - Fonction qui vous permet de multiplier 2 nombres'
# puts "5 - Fonction qui vous permet de mettre à la puissance d'un autre nombre"
# puts '6 - Fonction qui vous permet de calculer un nombre factoriel'
# a = gets.chomp.to_i
# if a == 1
#   puts 'Quel sont vos nombres à additionner ?'
#   print '>'
#   puts add(gets.chomp.to_f, gets.chomp.to_f)
# elsif a == 2
#   puts 'Quel sont vos nombres à soustraire ?'
#   print '>'
#   puts subtract(gets.chomp.to_f, gets.chomp.to_f)
# elsif a == 3
#   puts 'Quel sont vos nombres à additionner (via un array) ?'
#   print '>'
#   puts sum(gets.chomp)
# elsif a == 4
#   puts 'Quel sont vos nombres à multiplier ?'
#   print '>'
#   puts multiply(gets.chomp.to_f, gets.chomp.to_f)
# elsif a == 5
#   puts 'Quel sont vos nombres à mettre à la puissance (forme a puissance b) ?'
#   print '>'
#   puts power(gets.chomp.to_f, gets.chomp.to_f)
# elsif a == 6
#   puts 'Quel est le nombre dont vous souhaitez connaître le factoriel ?'
#   print '>'
#   puts factorial(gets.chomp.to_i)
# else
#   puts 'Erreur, veuillez essayer avec le numéro de fonction'
# end
