require 'faker'

User.create(first_name: "anonymous",last_name: "anonymous")
until User.count == 50
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name
  )
end

users = User.all
until Gossip.count == 10
  Gossip.create(
    user: users.sample,
    title: Faker::Book.title,
    content: Faker::Quote.yoda
  )
end

gossips = Gossip.all
until Comment.count == 50
  Comment.create(
    user: users.sample,
    gossip: gossips.sample,
    content: Faker::Quote.yoda
  )
end
