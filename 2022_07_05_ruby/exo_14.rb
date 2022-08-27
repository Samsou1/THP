list_size = 50
mailing_list = Array.new(list_size) {|i| "jean.dupont.#{i+1}@email.fr"}
(list_size/2).times do |i|
  print mailing_list[2 * i + 1]
end