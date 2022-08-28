class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.belongs_to :admin, index: true
      t.string :title
      t.string :location
      t.text :description
      t.datetime :start_date
      t.integer :duration
      t.integer :price

      t.timestamps
    end
  end
end
