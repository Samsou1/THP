require_relative 'lib/game'
require_relative 'lib/player'

# welcomes the new player to the game
puts '--------------------------------------------'
puts "|Welcome to 'THE POO SURVIVAL GAME' !      |"
puts '|The goal is to be the last one standing ! |'
puts '--------------------------------------------'
puts "\nWhat's your name adventurer? "
print '>'
name = gets.chomp
puts "Welcome to the game #{name}"
player_human = HumanPlayer.new(name)
player1 = Player.new('Thor')
player2 = Player.new('Conan')
enemies = [player1, player2]

# while the hero is still alive andone of their enemies is still standing,make them fight
while [player_human.hp, [player1.hp, player2.hp].max].min.positive?
  puts ''
  player_human.show_state_v2
  puts ' What do you wanna do?'
  puts "\nw - Look for a better weapon"
  puts 'h - Look for healing packs'
  puts "\n Attack an enemy"
  puts "\n1 - #{player1.name} has #{player1.hp} HP" if player1.hp.positive?
  puts "2 - #{player2.name} has #{player2.hp} HP" if player2.hp.positive?
  choice = gets.chomp
  case choice
  when 'w'
    player_human.search_weapon
  when 'h'
    player_human.search_health_pack
  when '1'
    puts "\nWhat are you trying to do, make an omelet out of the poor guy?" if player1.defeated?
    player_human.attacks(player1) if player1.hp.positive?
  when '2'
    puts "\nWhat are you trying to do, make an omelet out of the poor guy?" if player2.defeated?
    player_human.attacks(player2) if player2.hp.positive?
  else
    puts 'Are you trying to flee or something?'
  end
  puts 'The enemies attack!' if player1.hp > 0 && player2.hp > 0 
  enemies.each { |enemy| enemy.attacks(player_human) if enemy.hp.positive? }
end

# after we left the fight, outputs who won the fight
if player_human.hp.positive?
  puts 'Congrats you beat all the enemies! Will you try your luck another time?'
else
  puts 'Game over, try your luck another time kid'
end
