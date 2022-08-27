puts "Quand es-tu né(e) ?"
print ">"
birth_year=gets.to_i
 year_today = 2022
 (year_today-birth_year).times do |year|
    if birth_year+year == year_today-year
        puts "il ya #{year} ans j'avais la motier de l'age que j'ai aujourd'hui "
    end
    puts "Il ya #{(year_today-birth_year)-year} ans tu avais  #{year} ans"
end