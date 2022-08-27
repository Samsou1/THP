# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all

100.times do
  movie = Movie.create!(name: Faker::Movie.title, year: rand(1900..2020), genre: ["action", "horror", "comedy", "drama"].sample,synopsis: Faker::Movie.quote,director: Faker::Name.name,allocine_rating: rand(10..50).to_f,my_rating: rand(1..5),alread_seen: [true, false].sample)
end

puts "100 movies have been added to the database"
