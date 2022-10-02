class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, length: { minimum: 3 }
  has_many :books

  def full_name
    self.first_name + " " + self.last_name
  end
end
