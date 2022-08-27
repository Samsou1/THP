require 'faker'
require 'table_print'

Faker::Config.locale = 'fr'

City.create(name: Faker::Address.city) until City.count == 10
cities = City.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE CITY: \n\n"
# tp cities.sample, except: %i[created_at updated_at]

# User.create(
#   first_name: 'anonymous',
#   last_name: 'anonymous',
#   city: cities.sample,
#   age: rand(18..60),
#   description: Faker::Quote.yoda,
#   email: Faker::Internet.email
# )

until User.count == 20
  User.create(
    email: Faker::Internet.email,
    password: Faker::Internet.password,
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    city: cities.sample,
    age: rand(18..60),
    description: Faker::Quote.yoda
  )
end
users = User.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE USER: \n\n"
# tp users.sample, except: %i[created_at updated_at]

until Gossip.count == 50
  Gossip.create(
    user: users.sample,
    title: Faker::Book.title[0..12],
    content: Faker::Quote.yoda
  )
end
gossips = Gossip.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE GOSSIP: \n\n"
# tp gossips.sample, except: %i[created_at updated_at]

until Comment.count == 100
  Comment.create(
    user: users.sample,
    gossip: gossips.sample,
    content: Faker::Quote.yoda
  )
end

until Like.count == 500
  Like.create(
    user: users.sample,
    gossip: gossips.sample
  )
end

# comments = Comment.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE COMMENT: \n\n"
# tp comments.sample, except: %i[created_at updated_at]

# puts "\n"
# puts '~' * 50
# puts "\n"
