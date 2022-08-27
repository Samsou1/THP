class GossipTag < ApplicationRecord
  belongs_to :tag
  belongs_to :gossip
  has_many :likes
end
