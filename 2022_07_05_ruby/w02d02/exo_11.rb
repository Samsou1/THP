puts "Bonjour, c'est quoi ton année de naissance ?"
print ">"
birth_year=gets.to_i
increment=birth_year
while increment <=2022 do
    puts "Il y a #{2022-increment} ans tu avais #{increment -birth_year} ans"
    increment+=1
end