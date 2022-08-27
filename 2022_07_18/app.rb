require_relative 'lib/event.rb'
require_relative 'lib/user.rb'
require_relative 'lib/calendar_displayer.rb'
require 'pry'

class App
  birthday = Event.new("2022-07-30 14:00",180, "Franck's birthday party",["moi@gmail.com","franck@gmail.com","lucie@gmail.com"])
  dentist = Event.new("2022-07-10 09:00",60, "Dentist appointment",["moi@gmail.com","dentist@gmail.com"])
  wedding = Event.new("2022-07-05 15:00",240, "Alice's wedding",["moi@gmail.com","franck@gmail.com","alice@gmail.com","lucie@gmail.com"])
  sport = Event.new("2022-07-30 08:00",60, "Sport club get-togeher",["moi@gmail.com","coach@gmail.com"])
  party = Event.new("2022-06-18 20:00",180, "Let's get drunk party",["moi@gmail.com","dj@gmail.com","caterer@gmail.com"])
  puts Event.return_list_of_events
  puts Calendar_Displayer.new(Event.return_list_of_events)
end

binding.pry
