require_relative 'player'
require 'json'

# This class regroups useful methods to run a full game
class Game
  attr_accessor :human_player, :enemies, :enemies_left

  # initializes a new game with a given number of enemies and a certain amount of health for the hero
  def initialize(str)
    @human_player = HumanPlayer.new(str)
    @enemies_left = 10
    @enemies_in_sight = []
    @names = JSON.parse(File.read('names.json'))['names']
  end

  # allows the game to add new enemies that can attack you and that you can attack
  def new_players_in_sight
    if @enemies_in_sight.size == @enemies_left
      puts 'All the enemies are in sight!'
    else
      roll = rand(1..6)
      case roll
      when 1
        puts "\nNo new enemy in sight"
      when 2..4
        puts "\nAnother enemy gets within fighting range"
        @enemies_in_sight << Player.new(@names.sample)
      when 5..6
        if @enemies_left - @enemies_in_sight.size == 1
          puts "\nAnother enemy gets within fighting range"
          @enemies_in_sight << Player.new(@names.sample)
        elsif @enemies_left - @enemies_in_sight.size >= 2
          puts "\nNew enemies get within fighting range"
          @enemies_in_sight << Player.new(@names.sample)
          @enemies_in_sight << Player.new(@names.sample)
        else
          puts "\nNo new enemy in sight"
        end
      end
    end
  end

  # makes it so a character with no HP left leaves the game
  def kill_player(player)
    @enemies_in_sight.delete(player)
    @enemies_left -= 1
  end

  # allows to know if the game is supposed to keep going if the player is still alive and is still facing enemies
  def ongoing?
    [@human_player.hp, @enemies_left].min.positive?
  end

  # outputs the health of the player and how many enemies he's facing
  def show_players
    puts "You currently have #{@human_player.hp} HP and you're facing #{enemies_in_sight.size} enemies"
  end

  # outputs the menu to select what the player wants to do
  def menu
    puts "\nWhat would you like to do?"
    puts "\n  W - Look for a better weapon"
    puts '  H - Look for healing potions'
    puts "\n----- or -----"
    puts "\nAttack an enemy:"
    puts ''
    @enemies_in_sight.each_with_index { |enemy, index| puts "  #{index + 1} - #{enemy.name} (#{enemy.hp} HP)" }
    puts 'No enemy in sight yet' if @enemies_in_sight.size.zero?
  end

  # this function takes the choice of the player and processes it
  # so the ennemies and the human player can behave in the way the player intended
  def menu_choice(str)
    case str.downcase
    when 'w'
      @human_player.search_weapon
    when 'h'
      @human_player.search_health_pack
    when '1'..@enemies_in_sight.size.to_s
      index = str.to_i - 1
      @human_player.attacks(@enemies_in_sight[index]) if @enemies_in_sight[index].hp.positive?
      kill_player(@enemies_in_sight[index]) if @enemies_in_sight[index].defeated?
    else
      puts 'Are you trying to flee or something?'
    end
    enemies_attack
  end

  # this function makes it so all enemies attack the human player
  def enemies_attack
    return unless ongoing?
    puts "\nThe enemies attack!"
    @enemies_in_sight.each { |enemy| enemy.attacks(@human_player) if ongoing? }
  end

  # this function is to be called at the end of the game to either congratulate the player or tell him to try again
  def fin
    if @human_player.hp.positive?
      puts 'Congrats you beat all the enemies! Will you try your luck another time?'
    else
      puts 'Game over, try your luck another time kid..'
    end
  end
end
