# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


rails generate model Movie name:string year:integer genre:string synopsis:text director:string allocine_rating:float my_rating:integer alread_seen:boolean

rails db:migrate


c)
Movie.create(name: "Good Will Hunting", year: 1995, genre: "Drama", synopsis: "Will a math genius meets a professor from one of the most restigious schools in the US", director: "Gus Van Sant", allocine_rating: 3.2, my_rating: 5, alread_seen: true)

movie1= Movie.find_by(name: "Beowulf")
movie1.update(allocine_rating: 4.7)

movie1= Movie.find_by(name: "The Exorcist")
movie1.update(genre: "Comedy")

Movie.where(alread_seen: true)

Movie.where(alread_seen: true).first.destroy

tp Movie.all, :ID, "name", "year" 
#Don't forget to add the gem "print_table" and bundle install

d)
*******
require 'faker'

User.destroy_all

100.times do
  movie = Movie.create!(name: Faker::Movie.title, year: rand(1900..2020), genre: ["action", "horror", "comedy", "drama"].sample,synopsis: Faker::Movie.quote,director: Faker::Name.name,allocine_rating: rand(1..5),my_rating: rand(10..50).to_f/10,alread_seen: [true, false].sample)
end

puts "100 movies have been added to the database"
*******
rails db:seed
tp Movie.all, :ID, "name", "year"

