class GossipController < ApplicationController
  def index
    @gossips = Gossip.all
  end

  def create
    @gossips = Gossip.all
    @gossip = Gossip.new(user: User.first, title: params['gossip_title'], content: params['gossip_content'])
    if @gossip.save
      # redirect_to home_path
      @posted = true
      render gossip: 'index'
    else
      render new_gossip_path
    end
  end

  def new
    @gossip = Gossip.new
  end

  def edit
    @gossip = Gossip.find(params[:id])
  end

  def show
    @gossip = Gossip.find_by_id(params[:id])
    @comments = Comment.where(gossip_id: params[:id])
  end

  def update
    @gossip = Gossip.find_by_id(params[:id])
    if @gossip.update(title: params[:gossip_title], content: params[:gossip_content])
      @posted = true
      redirect_to gossip_path(@gossip.id)
    else
      render :edit
    end
  end

  def destroy
    @gossip = Gossip.find_by_id(params[:id])
    @gossip.destroy
    flash[:success] = 'The gossip was destroyed'
    redirect_to gossip_index_path
  end
end
