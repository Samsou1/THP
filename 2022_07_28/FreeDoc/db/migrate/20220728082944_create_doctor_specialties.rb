class CreateDoctorSpecialties < ActiveRecord::Migration[5.2]
  def change
    create_table :doctor_specialties do |t|
      t.belongs_to :doctor, index: true
      t.belongs_to :specialty, index: true

      t.timestamps
      # validates :doctor_id, uniqueness: {scope: :specialty_id}
    end
  end
  # validates_uniqueness_of :doctor_id, scope: :specialty_id
end
