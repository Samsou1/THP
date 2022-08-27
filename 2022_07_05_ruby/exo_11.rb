# print "What's your birth year? "
# birth_year = gets.to_i
# n = birth_year
# puts ''
# (Time.now.year - birth_year - 1).times do
#   puts "#{n + 1} - #{Time.now.year - (n + 1)} year(s) ago, you were #{(n + 1) - birth_year} year(s) old. \n"
#   n += 1
# end


puts "Bonjour, quelle est ton année de naissance ?"
print ">"
birth_year=gets.to_i
increment=birth_year
while increment <=2022 do
    puts "Il y a #{2022-increment} ans tu avais #{increment -birth_year} ans"
    increment+=1
end
