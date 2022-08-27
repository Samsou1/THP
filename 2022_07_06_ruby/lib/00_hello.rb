def say_hello(first_name ="")
  puts "Bonjour #{first_name}"
end


def ask_first_name
  puts "Quel est ton prénom ?"
  print ">"
  gets.chomp
end

first_name = ask_first_name
say_hello(first_name)
