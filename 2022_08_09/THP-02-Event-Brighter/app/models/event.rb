class Event < ApplicationRecord
  # after_create :confirm_send
  validates :start_date,
            presence: true,
            if: :start_date_cannot_be_in_the_past
  validates :duration,
            presence: true,
            numericality: { only_integer: true, greater_than: 0 },
            if: :not_multiple_of_five?
  validates :title,
            presence: true,
            length: { in: 5..140 }
  validates :description,
            presence: true,
            length: { in: 20..1001 }
  validates :price,
            presence: true,
            numericality: { only_integer: true, greater_than: 0, less_than: 1000 }
  validates :location, presence: true
  has_many :attendances
  belongs_to :admin, class_name: 'User'
  has_many :attendees, through: :attendances, source: :user
  has_one_attached :event_picture

  def confirm_send
    EventMailer.confirm_email(self).deliver_now
  end

  def start_date_cannot_be_in_the_past
    errors.add(:start_date, "can't be in the past") if
      !start_date.blank? && start_date < Date.today
  end

  def not_multiple_of_five?
    errors.add(:duration, 'must be a multiple of 5') if
      !duration.blank? && duration % 5 != 0
  end
end
