require 'pry'
require 'date'
# require_relative 'event.rb'

class CalendarDisplayer
  attr_accessor :month, :year, :first_day, :number_of_days_in_month, :list_of_events

  def initialize(events)
    puts "De quelle année souhaitez vous regarder votre agenda ?"
    print ">"
    @year = gets.chomp
    puts "De quelle mois souhaitez vous regarder votre agenda ?"
    print ">"
    @month = gets.chomp
    @first_day = Time.new(@year, @month).wday
    @number_of_days_in_month = days_in_month(@year,@month) 
    @list_of_events = events
  end


  def days_in_month
    Date.new(@year.to_i, @month.to_i, -1).day
  end

  # def display_calendar
  #   line_to_display = ""
  #   if @month.to_i == 2 && Date.gregorian_leap?(@year.to_i) == false && @first_day.to_i == 1
  #     (0..3).each do |week|
  #       puts display_straight_line
  #       puts create_front_line(week)
  #       5.times do 
  #         puts create_other_line
  #       end
  #     end
  #   else
  #     (0..4).each do |week|
  #       puts display_straight_line
  #       puts create_front_line(week)
  #       5.times do 
  #         puts create_other_line
  #       end
  #     end
  #   end
  #   puts display_straight_line
  # end

  def display_calendar
    line_to_display = ""
    bloc_aggregate = []
    calculate_number_of_bloc.times do
      
    end
  end


  def calculate_number_of_bloc
    if @month.to_i == 2 && !Date.gregorian_leap?(@year.to_i) && @first_day.to_i == 1
      return 28
    else
      return 35
    end
  end

  def display_straight_line
    "-" * 71
  end

  def create_bloc(index)
    bloc_line = ""
    if index < first_day
      bloc_line << bloc_line += "|         " * 5
    elsif index > days_in_month
      bloc_line << bloc_line += "|         " * 5
    else
      day = index - first_day + 1
      bloc_line = "|#{format('%02d', day)}       "
      list_of_events.each do |event|
        if event.start_date.day == day 
          bloc_line += "|#{format('%02d',event.hour)}       "
          title_length = event.title.length
          if title_length <= 10
            bloc_line += "|#{event.title[0..title_length]}" + " " * (10 - title_length)
            bloc_line += "|         " * 3
          elsif title_length < 20 && title_length > 10
            bloc_line += "|#{event.title[0..10]}"
            bloc_line += "|#{event.title[11..title_length]}" + " " * (10 - title_length)
            bloc_line += "|         " * 2
          else
            bloc_line += "|#{event.title[0..10]}"
            bloc_line += "|#{event.title[11..20]}"
            bloc_line += "|#{event.title[21..title_length]}" + " " * (10 - title_length)
            bloc_line += "|         "
          end
        else
          bloc_line += "|         " * 4
        end
      end
    end
    bloc_line
  end

  # def create_front_line(which_line)
  #   line = ""
  #   day = 1
  #   if which_line == 0
  #     while day < @first_day do
  #       line += "|         "
  #       day += 1
  #     end
  #     while day <= 7 && day >= @first_day do
  #       line += "|#{format('%02d', day - first_day + 1)}       "
  #       day += 1
  #     end
  #   else
  #     while day <= 7 do
  #       if day + 7 * which_line - first_day  + 1 <= @number_of_days_in_month
  #         line += "|#{format('%02d', day + 7 * which_line - first_day  + 1)}       "
  #       elsif day + 7 * which_line - first_day  + 1 > @number_of_days_in_month
  #         line += "|         " 
  #       day += 1
  #       end
  #     end
  #   end
  #   line
  # end

  def create_other_line
    return "|         " * 7
  end

end

binding.pry
