class Gossip < ApplicationRecord
  belongs_to :user
  has_one :city, through: :user
  has_many :comments
  has_many :likes
  validates :user, presence: true
  validates :title, presence: true, length: { minimum: 3, maximum: 14 }
  validates :content, presence: true
end
