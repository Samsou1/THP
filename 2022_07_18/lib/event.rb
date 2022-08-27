require 'pry'
require 'time'

class Event
  attr_accessor :start_date, :duration, :title, :attendees
  @@list_of_events = []

  def initialize(date,expected_duration, expected_title, list_of_guests)
    @start_date = Time.parse(date)
    @duration = expected_duration #en minutes
    @title = expected_title
    @attendees = list_of_guests
    @@list_of_events << self
  end

  def self.return_list_of_events
    @@list_of_events
  end

  def postpone_24h
    @start_date += 24 * 3600
  end

  def end_date
    @start_date + duration * 60
  end

  def is_past?
    return true if @start_date + duration < Time.now
    return false
  end

  def is_future?
    !is_past?
  end

  def is_soon?
    return true if @start_date > Time.now && Time.now + 30 * 60 > @start_date
    false
  end

  def to_s
    puts ">Titre : " + @title
    puts ">Date de début : #{@start_date}"
    puts ">Durée : #{@duration} minutes" 
    puts ">Invités : #{@attendees.join(', ')}"
  end

end

# binding.pry