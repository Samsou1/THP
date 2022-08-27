puts "Bonjour, donne moi un nombre"
print ">"
reach_number = gets.to_i
until reach_number == -1
    puts reach_number
    reach_number-=1
end