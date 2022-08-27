# require 'pry'
# require 'rspec'

require 'twitter'

require 'dotenv'
Dotenv.load('.env')

client = Twitter::REST::Client.new do |config|
  config.consumer_key        = ENV["TWITTER_CONSUMER_KEY"]
  config.consumer_secret     = ENV["TWITTER_CONSUMER_SECRET"]
  config.access_token        = ENV["TWITTER_ACCESS_TOKEN"]
  config.access_token_secret = ENV["TWITTER_ACCESS_TOKEN_SECRET"]
end

# créer un premier tweet
# client.update('Mon premier tweet en Ruby ')


# liker les 25 derniers bonjour_monde
# client.search("#bonjour_monde", result_type: "recent").take(25).collect do |tweet|
#   client.favorite(tweet)
# end
client.search("#bonjour_monde", result_type: "recent").take(25).collect do |tweet|
  client.follow(tweet)
end

