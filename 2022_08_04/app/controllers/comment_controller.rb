class CommentController < ApplicationController
  before_action :authenticate_user, only: %i[create new]

  def index; end

  def create
    @comments = Comment.all
    @gossip = Gossip.find(params[:gossip_id])
    @comment = Comment.new(user: current_user, content: params['comment_content'], gossip_id: params[:gossip_id])
    if @comment.save
      @posted = true
      redirect_to gossip_path(@gossip.id)
    else
      render :new
    end
  end

  def new
    puts params.inspect
    puts params[:id]
    @gossip = Gossip.find_by_id(params[:id])
    @comment = Comment.new
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def show; end

  def update
    @gossip = Gossip.find(params[:gossip_id])
    @comment = Comment.find(params[:id])
    if @comment.update(content: params[:comment_content])
      @posted = true
      redirect_to gossip_path(@gossip.id)
    else
      render :edit
    end
  end

  def destroy
    @gossip = Gossip.find(params[:gossip_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to gossip_path(@gossip.id)
  end

  private

  def authenticate_user
    return if current_user

    flash[:alert] = 'Please log in.'
    redirect_to new_session_path
  end
end
