require_relative 'controller'

class Router
  attr_accessor :controller

  def initialize
    @controller = Controller.new
  end

  def perform 
    puts "BIENVENUE DANS THE GOSSIP PROJECT"

    while true
      puts "Tu veux faire quoi jeune mouss' ?"
      puts "1. Je veux créer un gossip"
      puts "4. Je veux quitter l'app"

      case params 
      when 1
        puts "Tu as choisi de créer un gossip" 
        new_gossip = @controller.create_gossip
        new_gossip.save
      when 4
        puts "À bientôt !"
        break
      else
        puts "Ce choix n'existe pas, merci de ressayer" 
      end
    end
  end

end