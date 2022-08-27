class Comment < ApplicationRecord
  belongs_to :gossip
  belongs_to :user
  has_many :likes
  has_many :users, through: :likes
end
