puts "Bonjour, c'est quoi ton année de naissance ?"
print ">"
birth_year=gets.to_i
increment=birth_year
while increment <=2022 do
    if 2022-increment==increment -birth_year 
        puts "Il y a #{2022-increment} ans tu avais la moitié de l'âge que tu as aujourd'hui"
    else
        puts "Il y a #{2022-increment} ans tu avais #{increment -birth_year} ans"
    end    
    increment+=1
end