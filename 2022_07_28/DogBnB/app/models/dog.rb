class Dog < ApplicationRecord
  belongs_to :city
  has_many :walks
  has_many :dogsitters, through: :walks
end
