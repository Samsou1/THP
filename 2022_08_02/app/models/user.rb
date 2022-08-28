class User < ApplicationRecord
  has_many :gossips
  validates :first_name, presence: true
  validates :last_name, presence: true
end
