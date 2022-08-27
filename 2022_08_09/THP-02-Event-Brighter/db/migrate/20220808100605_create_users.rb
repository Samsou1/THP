class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email,              null: false, default: ''
      t.string :encrypted_password, null: false, default: ''
      t.string :first_name
      t.string :last_name
      t.text :description
      t.boolean :admin, default: false

      t.timestamps
    end
  end
end
