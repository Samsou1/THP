require 'colorize'

# This class deals with board rendering
class Render
  attr_accessor :grid

  def initialize
    @grid = []
  end

  #depending on the content of the grid, it will colorize the symbols and the numbers in a different way
  def display_colour(int)
    case @grid[int].value
    when (1..9)
      @grid[int].value.to_s.colorize(:light_black)
    when 'X'
      @grid[int].value.colorize(:red)
    when 'O'
      @grid[int].value.colorize(:light_blue)
    end
  end

  # display the board with a specific shape and takes into consideration what colour every symbol or number should be
  def render_board(grid)
    @grid = grid
    puts "\n\n          |     |     "
    puts "       #{display_colour(0)}  |  #{display_colour(1)}  |  #{display_colour(2)}  "
    puts '     _____|_____|_____'
    puts '          |     |     '
    puts "       #{display_colour(3)}  |  #{display_colour(4)}  |  #{display_colour(5)}  "
    puts '     _____|_____|_____'
    puts '          |     |     '
    puts "       #{display_colour(6)}  |  #{display_colour(7)}  |  #{display_colour(8)}  "
    puts '          |     |     '
    puts "\n\n"
  end
end
