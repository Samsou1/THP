class AddColumnToArticles < ActiveRecord::Migration[7.0]
  def change
    add_column :articles, :public, :boolean, default: false
  end
end
