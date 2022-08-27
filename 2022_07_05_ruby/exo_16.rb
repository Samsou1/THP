puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print ">"
reach_number = gets.to_i
increment = 1
if reach_number > 25
    puts "Nombre trop élevé"
else
    puts "Voici la pyramide"
    until increment > reach_number
        puts " " * (reach_number-increment) + "#" * increment
        increment+=1
    end
end