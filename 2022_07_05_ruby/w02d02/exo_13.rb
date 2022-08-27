list_size = 50
mailing_list = Array.new(list_size) {|i| "jean.dupont.#{i+1}@email.fr"}
puts "#{mailing_list}"