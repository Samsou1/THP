class TestMigration < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.boolean :is_admin      
      t.timestamps
    end
  end
end
