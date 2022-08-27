require 'pry'

class Event_creator
  attr_accessor :start_date, :duration, :title, :attendees

  def initialize
    puts "Salut, tu veux créer un événement ? Cool !" 
    puts "Commençons. Quel est le nom de l'événement ?"
    print ">"
    @title = gets.chomp
    puts "Super. Quand aura-t-il lieu ?"
    print ">"
    @start_date = gets.chomp
    puts "Au top. Combien de temps va-t-il durer (en minutes) ?"
    print ">"
    @duration = gets.chomp.to_i
    puts "Génial. Qui va participer ? Balance leurs e-mails (sous forme 'email1 ; email 2...' "
    print ">"
    @attendees = gets.chomp.split(" ; ")
    puts "Parfait, ton évènement a été créé"
  end

  def to_s
    puts ">Titre : " + @title
    puts ">Date de début : #{@start_date}"
    puts ">Durée : #{@duration} minutes" 
    puts ">Invités : #{@attendees.join(', ')}"
  end

  def date_parser(date)
    if date[0..1] == "le"
      return Date.parse(date)
    # else
      # return
    end
  end

end

# binding.pry