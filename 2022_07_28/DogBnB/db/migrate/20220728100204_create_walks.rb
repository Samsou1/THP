class CreateWalks < ActiveRecord::Migration[5.2]
  def change
    create_table :walks do |t|
      t.datetime :date
      t.belongs_to :dog, index: true
      t.belongs_to :dogsitter, index: true

      t.timestamps
    end
  end
end
