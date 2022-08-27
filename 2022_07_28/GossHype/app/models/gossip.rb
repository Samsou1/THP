class Gossip < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :users, through: :likes
  has_many :comments
  
  has_many :gossip_tags
  has_many :tags, through: :gossip_tags
end
