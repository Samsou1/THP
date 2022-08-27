puts "Quand es-tu né(e) ?"
print ">"
birth_year=gets.to_i
 year_today = 2022
 (year_today-birth_year).times do |year|
    puts "Il ya #{(year_today-birth_year)-year} ans tu avais  #{year} ans"
end