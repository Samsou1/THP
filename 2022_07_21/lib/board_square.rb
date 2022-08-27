# This class deals with single board squares
class BoardSquare
  attr_accessor :value

  def initialize
    @value = nil
  end

  #check if this board square is yet filled with a symbol or not
  def check_allocated
    @value.is_a?(String) ? true : false
  end

  #writes a 'X' in this board square
  def write_cross
    @value = 'X'
  end

  #writes a 'O' in this board square
  def write_circle
    @value = 'O'
  end
end
