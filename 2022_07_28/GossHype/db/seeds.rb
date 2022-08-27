# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

10.times do
  City.create(name: Faker::Address.city, zip_code: Faker::Address.zip)
  puts "\nA new city has been created"
end

cities = City.all
10.times do
  fname = Faker::Name.first_name
  lname = Faker::Name.last_name
  User.create(
    first_name: fname, last_name: lname, description: Faker::Movies::StarWars.quote,
    email: "#{fname}.#{lname}@gmail.com", age: rand(15..65), city: cities.sample
  )
  puts "\nA new user has been created"
end

tags = %w[funny nsfw drama youtube movies music USA Trump Russia mdr]
tags.size.times do |i|
  Tag.create(title: tags[i])
  puts "\nA new tag has been created"
end

users = User.all
20.times do
  Gossip.create(
    user: users.sample, title: Faker::Quote.singular_siegler,
    content: Faker::Quote.famous_last_words
  )
  puts "\nA new gossip has been created"
end

gossips = Gossip.all
tags = Tag.all
gossips.size.times do |index|
  iteration = rand(1..4)
  iteration.times do
    GossipTag.create(gossip: gossips[index], tag: tags.sample)
    puts "A new tag has been created for gossip n° #{index}"
  end
end

50.times do
  PrivateMessage.create(content: Faker::Lorem.paragraph_by_chars,recipient: users.sample , sender:users.sample)
  puts "\nA new message has been created"
end

gossips = Gossip.all
20.times do
  Comment.create(content: Faker::Lorem.paragraph_by_chars, user: users.sample, gossip: gossips.sample)
  puts "\nA new comment has been created"
end

comments = Comment.all
50.times do
  iteration = rand(1..2)
  if iteration == 1
    Like.create(user: users.sample, gossip: gossips.sample)
    puts "\nA new like has been created in a gossip"
  else
    Like.create(user: users.sample, comment: comments.sample)
    puts "\nA new like has been created in a comment"
  end
end
