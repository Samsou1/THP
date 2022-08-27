# This class generates a player with a name, and an X or O symbol.
class Player
  attr_accessor :name, :symbol

  # creates a new player with a name and a symbol
  def initialize(str, symb)
    @name = str
    @symbol = symb
  end
end
