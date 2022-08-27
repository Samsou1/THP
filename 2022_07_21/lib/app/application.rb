require_relative '../game'
require_relative '../player'
require 'colorize'

# This class performs the game loop
class Application
  attr_accessor :name1, :name2, :game_won1, :game_won2, :game_drawn

  def initialize
    @name1 = ''
    @name2 = ''
    @game_won1 = 0
    @game_won2 = 0
    @game_drawn = 0
    screen_clear
    prompt_welcome
    prompt_name
    prompt_rules
    game_loop
  end

  # clear the console
  def screen_clear
    system('clear')
  end

  # displays habitual greetings
  def prompt_welcome
    puts "\n\nWelcome to Tictac TOE!"
  end

  # ask the players what their name are and store them
  def prompt_name
    puts "\nPlayer 1, what's your name?"
    @name1 = gets.chomp
    puts "\nThat's a great name #{name1}, how about you Player 2?"
    @name2 = gets.chomp
    puts "\nWelcome to both of you #{name1} and #{name2}"
  end

  # display what the rules of the games are
  def prompt_rules
    puts "\nI'm sure you all know this game but just so we're clear, here are the rules again:"
    puts "\nHere is a board of 9 squares that are empty for now."
    puts "You will place your symbol, either a #{'X'.colorize(:red)} or a #{'O'.colorize(:light_blue)} on each square."
    puts "In order to win the game, you'll need to place 3 of your symbols on the same row, column or diagonal."
    puts "If all 9 squares are filled and there's no winner then it'll be a draw."
    puts "\nShall we?"
  end

  # display how many times player 1 won, how many times player 2 won, how many games were drawn and finally who's in the lead
  def display_stats
    puts "\n#{@name1} won #{game_won1} times"
    puts "#{@name2} won #{game_won2} times"
    puts "There has been #{game_drawn} draws"
    if game_won1 > game_won2
      puts "\n#{@name1} is leading by #{@game_won1 - @game_won2} points"
    elsif game_won2 > game_won1
      puts "#{@name2} is leading by #{@game_won2 - @game_won1} points"
    elsif @game_won2 == @game_won1
      puts "It's a tight race, you both have the same number of points"
    end
  end

  # asks the player if they want to keep playing or not or depending on what their answer is, start another game or close the Application
  def keep_playing?
    puts "\nDo you wanna play another game?"
    acceptable_response = false
    while acceptable_response == false
      response = gets.chomp
      case response.downcase
      when 'n', 'no', 'nah', 'nope'
        puts "\nOk, see you another time!"
        return false
      when 'y', 'yes', 'yeah', 'yep'
        puts "\nAwesome let's keep playing!"
        return true
      else
        puts "\nSorry, I didn't catch that, do you wanna keep playing?"
      end
    end
  end

  # creates games until a player decides to stop
  def game_loop
    wanna_play = true
    while wanna_play == true
      game = Game.new(@name1, @name2)
      @game_won1 += 1 if game.check_if_win[1] == 'X'
      @game_won2 += 1 if game.check_if_win[1] == 'O'
      @game_drawn += 1 if game.check_if_draw == true
      display_stats
      wanna_play = keep_playing?
    end
  end
end
