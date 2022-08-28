class GossipsController < ApplicationController
  def display
    @gossip = Gossip.find_by_id(params[:id])
  end

  def show_author
    @author = User.find_by_id(params[:id])
  end
end
