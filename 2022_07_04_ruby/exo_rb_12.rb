puts "Bonjour, donne moi un nombre"
print ">"
reach_number = gets.to_i
start = 0
until start > reach_number
    puts start
    start+=1
end