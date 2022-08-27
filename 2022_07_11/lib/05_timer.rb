def time_string(int)
  sec = int % 60
  min = (int / 60) % 60
  hour = int / 3600
  "#{format('%02d', hour)}:#{format('%02d', min)}:#{format('%02d', sec)}"
  # "#{hour.to_s.rjust(2, '0')}:#{min.to_s.rjust(2, '0')}:#{sec.to_s.rjust(2, '0')}"
end

# loop do
#   print "\nVeuillez indiquer le temps en secondes:\n> "
#   time = gets.chomp
#   if time.to_i.to_s != time
#     print "\nErreur, veuillez entrer un entier.\n"
#   elsif time.to_i >= 0
#     print time_string(time.to_i)
#     break
#   else
#     print "\nErreur, veuillez entrer un entier positif.\n"
#   end
#   print "\n-----------------------------------------------\n"
# end
