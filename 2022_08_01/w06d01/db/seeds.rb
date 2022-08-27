require 'faker'

until User.count == 50
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

users = User.all
until Gossip.count == 10
  Gossip.create(
    user_id: users.sample.id,
    title: Faker::Book.title,
    content: Faker::Quote.yoda
  )
end
