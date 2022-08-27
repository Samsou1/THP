class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name
      t.string :zip
      # t.belongs_to :patient, index: true
      # t.belongs_to :doctor, index: true
      # t.belongs_to :appointment, index: true

      t.timestamps
    end
  end
end
