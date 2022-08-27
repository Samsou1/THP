require 'httparty'
require 'json'

def generate_url(limit = 1)
  "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing?limit=#{limit}&convert=USD"
end

def limit
  response = HTTParty.get(generate_url(5)).body
  JSON.parse(response)['data']['totalCount']
  # ! 20 <-- put arbitrary limit here for testing !!
end
puts "Go do something else, seriously, it'll take a couple hours at least."

def json
  File.write('XHR.json', JSON.parse(HTTParty.get(generate_url(limit)).body.to_json))
  JSON.parse(File.read('XHR.json'))['data']['cryptoCurrencyList']
end

def crypto_scraper
  cryptos = []
  json
  puts limit
  limit.to_i.times do |i|
    currency = json[i]['symbol']
    price =  json[i]['quotes'][0]['price']
    puts "#{currency} => #{price}"
    cryptos << { currency => price }
  end
  File.write('cryptos.json', cryptos.to_json)
end

puts crypto_scraper


