# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'

10.times do 
    User.create(email: Faker::Internet.email(domain: 'example'), password: Faker::Internet.password(min_length: 8))
end

users = User.all

30.times do
    Article.create!(title: Faker::Lorem.word, content: Faker::Lorem.sentence(word_count: 5), user: users.sample)
end