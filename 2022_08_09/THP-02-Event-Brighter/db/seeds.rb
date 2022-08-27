require 'faker'
# require 'table_print'

Faker::Config.locale = 'en-GB'
User.create(
  email: 'admin@yopmail.com',
  password: 'adminpassword',
  first_name: 'Sam',
  last_name: 'Pef',
  description: 'Le mec le plus classe de la galaxie',
  admin: true
)
until User.count == 10
  User.create!(
    email: Faker::Internet.unique.email,
    password: Faker::Internet.password,
    first_name: Faker::Name.unique.first_name,
    last_name: Faker::Name.unique.last_name,
    description: Faker::Quote.yoda
  )
end
users = User.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE USER: \n\n"
# tp users.sample, except: %i[created_at updated_at]
Faker::TvShows::SiliconValley.unique.clear
until Event.count == 15
  Event.create!(
    admin: users.sample,
    start_date: Faker::Date.forward(days: 30),
    title: Faker::TvShows::SiliconValley.unique.invention,
    location: Faker::Address.city,
    duration: rand(1..12) * 5,
    description: Faker::TvShows::SiliconValley.unique.quote,
    price: rand(1..1000)
  )
end
events = Event.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# print "SAMPLE EVENT: \n\n"
# tp events.sample, except: %i[created_at updated_at]

until Attendance.count == 40
  Attendance.create!(
    attendee: users.sample,
    event: events.sample
  )
end
# attendances = Attendance.all

# puts "\n"
# puts '~' * 50
# puts "\n"
# puts "SAMPLE ATTENDANCE: \n\n"
# tp attendances, except: %i[created_at updated_at]

# puts "\n"
# puts '~' * 50
# puts "\n"
