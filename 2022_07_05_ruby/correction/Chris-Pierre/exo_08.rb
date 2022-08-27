puts "Donne un chiffre t bo"
print ">"
number = gets.to_i
total = number
number.times do
    total -= 1
    puts total
end
