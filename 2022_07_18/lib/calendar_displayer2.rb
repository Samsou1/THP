require 'pry'
require 'date'

class CalendarDisplayer2
  attr_accessor :month, :year, :first_day, :number_of_days_in_month

  def initialize
    puts "De quelle année souhaitez vous regarder votre agenda ?"
    print ">"
    @year = gets.chomp
    puts "De quelle mois souhaitez vous regarder votre agenda ?"
    print ">"
    @month = gets.chomp
    @first_day = Time.new(@year, @month).wday
    @number_of_days_in_month = days_in_month(@year,@month) 
    puts "coucou"
  end

 

  def days_in_month
    Date.new(@year.to_i, @month.to_i, -1).day
  end

end