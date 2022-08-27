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


rails generate model Track title:string album:string artist:string duration:integer size:integer price:float
rails db:migrate
rails db:migrate:status

a)
Album.all.size ==> 347
Track.find_by(title:"White Room").artist ==> Eric Clapton
Track.find_by(duration:"188133 ").title ==> Perfect
Album.find_by(title:"Use Your Illusion II").artist ==> "Guns N Roses" 

b)
Album.where("title like?", "%Great%").size ==> 9
Album.where("title like?", "%music%").destroy_all 
Album.where(artist: "AC/DC").size ==> 2
Track.where(duration:158589).size ==> 0

c)

Track.where(artist:"AC/DC").size.times do |index|
puts Track.where(artist:"AC/DC")[index].title
end

Track.where(album:"Let There Be Rock").size.times do |index|
puts Track.where(album:"Let There Be Rock")[index].title
end

count = 0
Track.where(album:"Let There Be Rock").size.times do |index|
  count += Track.where(album:"Let There Be Rock")[index].price
end
count ==> 7.92

count = 0
Track.where(artist:"Deep Purple").size.times do |index|
  count += Track.where(artist:"Deep Purple")[index].price
end
count ==> 90.09

Track.where(artist:"Eric Clapton").size.times do 
  Track.where(artist:"Eric Clapton")[0].update(artist:"Britney Spears")
end
