puts "Bonjour, c'est quoi ton prénom ?"
print "> "
user__first_name = gets.chomp
puts "Et maintenant ton nom de famille ?"
print "> "
user__last_name = gets.chomp
puts "Salut #{ user__first_name + " " + user__last_name} !"