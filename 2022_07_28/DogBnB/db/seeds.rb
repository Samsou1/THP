# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cities = %w[Paris Lyon Nice]

cities.size.times do |index|
  City.create(city_name: cities[index])
  puts "\nA city has been created"
end

cities = City.all
10.times do
  Dog.create(name: Faker::Name.first_name, city: cities.sample)
  puts "\nA Dog has been created"
  Dogsitter.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, city: cities.sample)
  puts "\nA Dogsitter has been created"
end

dogs = Dog.all
20.times do
  dog = dogs.sample
  dog_city = dog.city
  dogsitter_with_right_city = Dogsitter.where(city: dog_city).sample
  Walk.create(date: Faker::Date.in_date_period, dog: dog, dogsitter: dogsitter_with_right_city)
  puts "\nA Walk has been created"
end
