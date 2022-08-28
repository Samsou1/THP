class Like < ApplicationRecord
  belongs_to :user
  belongs_to :gossip
  validates :user, uniqueness: { scope: :gossip }
end
