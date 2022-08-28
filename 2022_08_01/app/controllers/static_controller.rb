class StaticController < ApplicationController
  def contact; end

  def index
    @gossips = Gossip.all
    @user = User.all
  end

  def team; end
end
