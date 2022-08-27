class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.integer :age
      t.string :description

      t.belongs_to :city, index: true
      t.timestamps
    end
  end
end
