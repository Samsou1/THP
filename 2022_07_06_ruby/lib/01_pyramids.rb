def full_pyramid
  puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  print '>'
  reach_number = gets.chomp.to_i
  if reach_number.between?(1,25)
    puts 'Voici la pyramide'
    reach_number.times do |increment|
      puts ' ' * (reach_number - increment) + '#' * (2 * increment + 1)
    end
  end
end

def wtf_pyramid
  puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
  print '>'
  reach_number = gets.chomp.to_i
  if reach_number.between?(1,25) and reach_number.odd?
    puts 'Voici la pyramide'
    (reach_number/2 +1).times do |increment|
      puts ' ' * (reach_number - increment) + '#' * (2 * increment + 1)
    end
    (reach_number/2).times do |increment_2|
      puts ' ' * (increment_2 + reach_number/2 +2) + '#' * (reach_number - 2 * increment_2 -2)
    end
  end
end

wtf_pyramid
