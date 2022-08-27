class DoctorSpecialty < ApplicationRecord
  belongs_to :doctor
  belongs_to :specialty
  validates :doctor_id, uniqueness: { scope: :specialty_id }
end
