class CreateTasks < ActiveRecord::Migration[5.0]
  def change
    create_table :tasks do |t|
      t.text :title
      t.boolean :complete

      t.timestamps
    end
  end
end
