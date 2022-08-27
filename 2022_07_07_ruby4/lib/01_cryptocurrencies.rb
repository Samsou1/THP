# frozen_string_literal: true

# gem install json

require 'json'
currencies = JSON.parse(File.read('cryptocurrencies.json'))['currencies'] # => Array
prices = JSON.parse(File.read('prices.json'))['prices'] # => Array

def create_hash(array1, array2)
  Hash[array1.zip(array2)] # create hash from two arrays
end

crypto_hash = create_hash(currencies, prices)

def highest_value(hash)
  hash.max_by { |_k, v| v.to_f }
end

def lowest_value(hash)
  hash.min_by { |_k, v| v.to_f }
end

def value_inferior_to(hash, value)
  hash.select { |_k, v| v.to_f < value }
end

def highest_value_limited_to(hash, value)
  hash_result = value_inferior_to(hash, value)
  highest_value(hash_result)
end

# puts highest_value(crypto_hash)
# puts lowest_value(crypto_hash)
# puts value_inferior_to(crypto_hash, 6000)
puts highest_value_limited_to(crypto_hash, 6000)
