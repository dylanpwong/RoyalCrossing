class CreateStories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.text :synopsis
      t.integer :genre_ids, array: true, default: []
      t.integer :chapter_ids, array: true, default: []
      t.timestamps
    end
    add_index(:stories,:author_id)
  end
end
