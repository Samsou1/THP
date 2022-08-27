class City < ApplicationRecord
  has_many :doctors
  has_many :appointments
  has_many :patients
end
