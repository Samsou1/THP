class GossipController < ApplicationController
  before_action :authenticate_user, only: %i[new show edit update destroy]

  def index
    @gossips = Gossip.all
    @likes = Like.all
  end

  def create
    @gossips = Gossip.all
    @gossip = Gossip.new(
      title: params[:gossip_title],
      content: params[:gossip_content]
    )
    @gossip.user = User.find_by(id: session[:user_id])
    if @gossip.save
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
    @like_count = Like.where(gossip_id: @gossip.id).count
    @likes = Like.all
  end

  def update
    @gossip = Gossip.find_by_id(params[:id])
    if @gossip.update(
      title: params[:gossip_title],
      content: params[:gossip_content]
    )
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

  private

  def authenticate_user
    return if current_user

    flash[:alert] = 'Please log in.'
    redirect_to new_session_path
  end
end
