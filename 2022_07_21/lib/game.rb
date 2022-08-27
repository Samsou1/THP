require_relative 'player'
require_relative 'board'

# This i the main game loop
class Game
  attr_accessor :player1, :player2, :board, :render

  def initialize(name1, name2)
    @player1 = Player.new(name1, 'X')
    @player2 = Player.new(name2, 'O')
    @board = Board.new
    @render = Render.new
    play
  end

  #allows to check if the game ended in a win or not
  def check_if_win
    winning_combination = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],
      [1, 4, 7], [2, 5, 8], [3, 6, 9],
      [1, 5, 9], [3, 5, 7]
    ]
    winning_combination.each do |ary|
      winning_element_for_x = 0
      winning_element_for_o = 0
      ary.length.times do |index|
        case @board.grid[ary[index] - 1].value
        when 'X'
          winning_element_for_x += 1
          return [true, 'X'] if winning_element_for_x == 3
        when 'O'
          winning_element_for_o += 1
          return [true, 'O'] if winning_element_for_o == 3
        end
      end
    end
    [false, '']
  end

  # main function of the class Game that allows you to keep playing until a winning combination has been found
  def play
    while !check_if_win[0] && !check_if_draw
      # while !check_if_win[0] && @board.check_full? && !check_if_draw
      puts "\nIt's #{@player1.name}'s turn to play, where do you want to place your #{player1.symbol.colorize(:red)}?"
      play_by_turn(1)
      next unless !check_if_win[0] && !check_if_draw

      puts "\nIt's now #{@player2.name}'s turn to play, where do you want to place your #{player2.symbol.colorize(:light_blue)}?"
      play_by_turn(2)
    end
    puts 'The game is finished'
    @render.render_board(@board.grid)
  end

  # plays one turn of Tic Tac Toe either from player 1 or 2
  def play_by_turn(int)
    @render.render_board(@board.grid)
    desired_play = gets.to_i
    while legal_move?(desired_play) == false
      puts "\nThis is not possible, can you give me another move?"
      @render.render_board(@board.grid)
      desired_play = gets.to_i
    end
    case int
    when 1
      @board.grid[desired_play - 1].write_cross
    when 2
      @board.grid[desired_play - 1].write_circle
    end
    puts "\n#{@player1.name} won the round!" if check_if_win[1] == 'X'
    puts "\n#{@player2.name} won the round!" if check_if_win[1] == 'O'
    puts "\nIt ended in a draw." if check_if_draw
  end

  # checks if the move that the player tries to make is legal or not ie, they gave the program an integer from 1 to 9 and the board square with such label is not yet filled
  def legal_move?(str)
    str = str.to_i
    (str >= 1 && str <= 9) && @board.grid[str - 1].value.is_a?(Integer) ? true : false
  end

  # check if the game ends in a draw
  def check_if_draw
    !check_if_win[0] && @board.check_full? ? true : false
  end
end
