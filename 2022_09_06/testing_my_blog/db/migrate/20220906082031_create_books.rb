class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.belongs_to :user, foreign_key: true
      t.timestamps
    end
  end
end
