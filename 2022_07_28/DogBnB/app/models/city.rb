class City < ApplicationRecord
  has_many :dogs
  has_many :dogsitters
  has_many :walks
end
