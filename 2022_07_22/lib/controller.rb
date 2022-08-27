require 'view'
require 'gossip'

class Controller
  
  def create_gossip
    gossip = Gossip.new("test1" "blablabla")
    gossip.save
  end


end
