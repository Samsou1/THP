require 'pry'

# This class represents non human players
class Player
  attr_accessor :name, :hp

  # creates a new player, usually an enemy
  def initialize(str)
    @name = str
    @hp = 10
  end

  # shows the health of the character
  def show_state
    puts "Player #{name} has #{hp} HP"
  end

  # takes into account the incoming damage and either make the character die or lose hps
  def gets_damage(damage)
    (@hp - damage).positive? ? @hp -= damage : @hp = 0
    puts "\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~" if @hp <= 0
    puts "Player #{name} has been defeated!" if @hp <= 0
    puts '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' if @hp <= 0
    show_state if @hp.positive?
  end

  # makes it so that a character attacks another one depending on the computed damage
  def attacks(player)
    puts "\nPlayer #{@name} attacks player #{player.name}"
    damage = compute_damage
    puts "Player #{@name} has done #{damage} damage to player #{player.name}"
    player.gets_damage(damage)
  end

  # computes the amount of damagea character deals at random
  def compute_damage
    rand(1..6)
  end

  # returns if a certain character is dead or not
  def defeated?
    @hp.zero?
  end
end

# This class represents a human player
class HumanPlayer < Player
  attr_accessor :weapon_level

  # initialises the hero player with a bigger health pool and a weapon
  def initialize(name)
    super(name)
    @weapon_level = 1
    @hp = 100
  end

  # computes the amount of damage the hero will deal depending on the quality of their weapon
  def compute_damage
    rand(1..6) * weapon_level
  end

  # shows the health and the quality of the weapon of the hero
  def show_state_v2
    puts "Player #{name} has #{hp} HP and a weapon level #{weapon_level}"
  end

  # allows the hero to look for a better weapon than their current one
  def search_weapon
    new_weapon_level = rand(1..6)
    puts "\nYou found a level #{new_weapon_level} weapon!"
    if new_weapon_level > @weapon_level
      puts "Woah.. this new weapon is far better than your current one, let's equip it!"
      @weapon_level = new_weapon_level
    else
      puts "Dang it! It's not an improvement.."
    end
  end

  # allows the hero to look for health potions to restore health
  def search_health_pack
    health_pack = rand(1..6)
    case health_pack
    when 1
      puts 'You found nothing, get back to work!'
    when 2..5
      puts 'Awesome, you just found a 50HP pack!'
      @hp <= 50 ? @hp += 50 : @hp = 100
      puts "You now have #{@hp} HP!"
    when 6
      puts 'Woah, you found a golden pack, it will grant you 80hp!!!'
      @hp <= 20 ? @hp += 80 : @hp = 100
      puts "You now have #{@hp} HP!"
    end
  end
end
