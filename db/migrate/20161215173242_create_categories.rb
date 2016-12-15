class CreateCategories < ActiveRecord::Migration[5.0]
  def change
    create_table :categories do |t|
      t.text :title

      t.timestamps
    end
    change_table :tasks do |t|
      t.integer :category_id 
    end
    add_foreign_key :tasks, :categories
  end
end
