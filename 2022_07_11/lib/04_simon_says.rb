def echo(str)
  str
end

def shout(str)
  str.upcase
end

def repeat(str, num = 2)
  return '' if num.zero?
  return str if num == 1

  str + " #{str}" * (num - 1)
end

def start_of_word(str, num = 1)
  str.slice(0..(num - 1))
end

def first_word(str)
  str.split.first
end

def titleize(str)
  str.split.each_with_index.map { |w, i| w != 'the' && w != 'and' || i.zero? ? w.capitalize : w }.join(' ')
end

# puts 'Bonjour, veuillez noter le numéro de la fonction que vous souhaitez tester ?'
# puts '1 - Fonction qui vous permet de répéter une phrase'
# puts '2 - Fonction qui vous permet de crier une phrase'
# puts '3 - Fonction qui vous permet de répéter une phrase x fois'
# puts '4 - Fonction qui vous permet de connaître les premières lettres d un mot'
# puts "5 - Fonction qui vous permet de connaitre le premier mot d'une phrase"
# puts '6 - Fonction qui vous permet de mettre une majuscule à chaque mot'
# a = gets.chomp.to_i
# if a == 1
#   puts 'Quelle est votre phrase à répéter ?'
#   print '>'
#   puts echo(gets.chomp)
# elsif a == 2
#   puts 'Quelle est votre phrase à crier ?'
#   print '>'
#   puts shout(gets.chomp)
# elsif a == 3
#   puts 'Quelle est votre phrase à répéter x fois '
#   print '>'
#   puts repeat(gets.chomp, gets.chomp)
# elsif a == 4
#   puts 'Quel est le mot dont vous souhaitez connaitre les premières lettres ?'
#   print '>'
#   puts start_of_word(gets.chomp, gets.chomp)
# elsif a == 5
#   puts 'Quelle est la phrase dont vous souhaitez connaître le premier mot ?'
#   print '>'
#   puts first_word(gets.chomp)
# elsif a == 6
#   puts 'Quelle est la phrase dont vous souhaitez avoir une lettre majuscule à chaque mot ?'
#   print '>'
#   puts titleize(gets.chomp)
# else
#   puts 'Erreur, veuillez essayer avec le numéro de fonction'
# end
