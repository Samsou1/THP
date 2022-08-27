puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"
print ">"
reach_number = gets.to_i
if reach_number > 25
    puts "Nombre trop élevé"
else
    increment = 1
    puts "Voici la pyramide"
    until increment > reach_number
        puts "#" * increment
        increment+=1
    end
end