require 'faker'

Faker::Config.locale = 'fr'

City.create(name: Faker::Address.city) until City.count == 10

cities = City.all
User.create(first_name: 'anonymous', last_name: 'anonymous', city: cities.sample, age: rand(18..60),
            description: Faker::Quote.yoda, email: Faker::Internet.email)

until User.count == 20
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    city: cities.sample,
    age: rand(18..60),
    description: Faker::Quote.yoda,
    email: Faker::Internet.email
  )
end

users = User.all
until Gossip.count == 50
  Gossip.create(
    user: users.sample,
    title: Faker::Book.title[0..12],
    content: Faker::Quote.yoda
  )
end

gossips = Gossip.all
until Comment.count == 100
  Comment.create(
    user: users.sample,
    gossip: gossips.sample,
    content: Faker::Quote.yoda
  )
end
