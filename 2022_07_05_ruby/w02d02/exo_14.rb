list_size = 50
mailing_list = Array.new(list_size) {|i| "jean.dupont.#{2*i+2}@email.fr"}
puts "#{mailing_list}"