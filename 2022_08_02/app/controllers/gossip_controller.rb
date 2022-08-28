class GossipController < ApplicationController
  def index
    @gossips = Gossip.all
  end

  def create
    @gossips = Gossip.all
    @gossip = Gossip.new(user: User.first, title: params['gossip_title'], content: params['gossip_content'])
    if @gossip.save
      @posted = true
      render gossip: 'index'
    else
      render new_gossip_path
    end
  end

  def new
    @gossips = Gossip.all
    @gossip = Gossip.new
  end

  def edit; end

  def show
    @gossip = Gossip.find_by_id(params[:id])
  end

  def update; end

  def destroy; end
end
