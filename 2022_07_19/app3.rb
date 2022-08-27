require_relative 'lib/game'
require_relative 'lib/player'

# welcomes the player to the game
puts "\n\n--------------------------------------------"
puts "|Welcome to 'THE POO SURVIVAL GAME' !      |"
puts '|The goal is to be the last one standing ! |'
puts '--------------------------------------------'
puts "\nWhat's your name, adventurer?"
print '> '
name = gets.chomp # takes the name of the new hero
puts "\nWelcome to the game, #{name}"
game = Game.new(name) # creates a new game with the new hero
while game.ongoing?
  game.new_players_in_sight # adds new enemies to the pool
  game.menu # displays the menu
  game.menu_choice(gets.chomp) # gets the choice of the player and plays the gameasthey intended
end
game.fin
