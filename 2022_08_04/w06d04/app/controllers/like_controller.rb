class LikeController < ApplicationController
  def create
    gossip_id = params[:gossip_id].keys[0].to_i
    puts gossip_id
    puts current_user.id
    @like = Like.create(user_id: current_user.id, gossip_id: gossip_id)
    redirect_back(fallback_location: root_path) if @like.save
  end

  def destroy
    gossip_id = params[:gossip_id].keys[0].to_i
    like_id = Like.where(user_id: current_user.id, gossip_id: gossip_id).first.id
    Like.destroy(like_id)
    redirect_back(fallback_location: root_path)
  end
end
