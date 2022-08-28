class User < ApplicationRecord

  has_secure_password
  belongs_to :city
  has_many :gossips
  has_many :comments
  has_many :likes
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :city, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true

    # City.find_or_create_by_name(city.name)
  # end
end
