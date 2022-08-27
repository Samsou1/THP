class Dogsitter < ApplicationRecord
  belongs_to :city
  has_many :walks
  has_many :dogs, through: :walks
end
