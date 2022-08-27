require 'launchy'

def check_if_user_gave_input
  abort("mkdir: missing input, you need to insert what you wanna search on Google") if ARGV.empty?
end

def create_url(query)
  "https://www.google.com/search?q=#{query.to_s}"
end

def open_url(array)
  Launchy.open(create_url(array[0]))
end

open_url(ARGV)