puts "Quand es-tu né(e) ?"
print ">"
birth_year=gets.to_i
 year_today = 2022
 (year_today-birth_year).times do |year|
    puts "En #{birth_year +year} tu avais #{year} ans"
end

