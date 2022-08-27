require_relative 'lib/game'
require_relative 'lib/player'

# creation of the 2 enemies the hero will face
player1 = Player.new('Conan')
player2 = Player.new('Thor')

# outputs what is going on
puts "On my left, we've got #{player1.name}, ready to draw some blood, and on my right is #{player2.name} who's been waiting for this moment their whole life!"
puts "\nLet the fight begin!!!"

# allows the hero to fighttheir enemies while he'sstill alive andone of their enemies is still standing
while player1.hp.positive? && player2.hp.positive?
  player1.attacks(player2)
  player2.hp.positive? && player2.attacks(player1)
end
