# frozen_string_literal: true

# gem install json

require 'json'
twitter_array = JSON.parse(File.read('journalists.json'))['journalists'] # => Array

def handle_count(array)
  array.length
end

def shortest_handle(array)
  min_length = array[0].length
  result_handle = array[0]
  array.each do |handle|
    result_handle = handle if handle.length < min_length
    min_length = handle.length if handle.length < min_length
  end
  result_handle
end

def longest_handle(array)
  max_length = array[0].length
  result_handle = array[0]
  array.each do |handle|
    result_handle = handle if handle.length > max_length
    max_length = handle.length if handle.length > max_length
  end
  result_handle
end

def number_of_handles(array, desired_length)
  increment = 0
  array.each { |handle| increment += 1 if handle.length == desired_length }
  puts increment
end

def isupcase(string)
  string == string.upcase
end

def upper_cases(array)
  increment = 0
  array.each { |handle| increment += 1 if isupcase(handle[1]) }
  puts increment
end

def sort_array_alphabetically(array)
  result_array = array.sort
  puts result_array
end

def sort_array_by_length(array)
  # result_array = array.sort_by { |handle| handle.length }
  result_array = array.sort_by(&:length)
  puts result_array
end

def array_position(array, string)
  position = -1
  array.each { |handle| position = array.find_index(handle) if handle == string }
  puts position
end

def generate_hash(default_value, array)
  min_key = shortest_handle(array).size
  max_key = longest_handle(array).size
  hash = {}
  (min_key..max_key).each { |length| hash.store(length, default_value) }
  hash
end

def show_array_repartition(array)
  hash = generate_hash(0, array)
  array.each { |handle| hash[handle.length] += 1 }
  puts hash
end

# puts handle_count(twitter_array)
# puts shortest_handle(twitter_array)
# puts number_of_handles(twitter_array, 5)
# puts upper_cases(twitter_array)
# puts sort_array_alphabetically(twitter_array)
# puts sort_array_by_length(twitter_array)
# puts array_position(twitter_array, '@epenser')
puts show_array_repartition(twitter_array)
