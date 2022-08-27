def who_is_bigger(a, b, c)
  if a.nil? || b.nil? || c.nil?
    'nil detected'
  else
    arr = [a, b, c]
    args = %w[a b c]
    "#{args[arr.find_index(arr.max)]} is bigger"
  end
end

def reverse_upcase_noLTA(str)
  str.reverse.upcase.delete('L').delete('T').delete('A')
end

def array_42(ary)
  ary.include?(42)
end

def magic_array(ary)
  ary.flatten.sort.uniq.map { |el| el % 3 != 0 ? el * 2 : nil }.compact
end

# puts 'Bonjour, veuillez noter le numéro de la fonction que vous souhaitez tester ?'
# puts '1 - Fonction qui vous permet de connaitre  le nombre le plus grand des 3'
# puts '2 - Fonction qui vous permet de renverser un string tout en enlevant les lettres L T et A'
# puts '3 - Fonction 42'
# puts '4 - Fonction qui enlève des duplicats, supprime les multiples de 3 et réorganise votre Array'
# a = gets.chomp.to_i
# if a == 1
#   puts 'Quel sont vos nombres dont vous souhaitez connaitre le plus grand ?'
#   print '>'
#   puts who_is_bigger(gets.chomp.to_f, gets.chomp.to_f, gets.chomp.to_f)
# elsif a == 2
#   puts 'Quel est votre string que vous souhaitez renverser ?'
#   print '>'
#   puts reverse_upcase_noLTA(gets.chomp)
# elsif a == 3
#   puts 'Quel est votre Array pour la fonction 42 ?'
#   print '>'
#   puts array_42(gets.chomp)
# elsif a == 4
#   puts 'Quel est votre Array à nettoyer ?'
#   print '>'
#   puts magic_array(gets.chomp)
# else
#   puts 'Erreur, veuillez essayer avec le numéro de fonction'
# end
