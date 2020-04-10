class CreateChapters < ActiveRecord::Migration[5.2]
  def change
    create_table :chapters do |t|
      t.string :title, null: false
      t.text :content
      t.text :pre_note
      t.text :post_note
      t.integer :story_id
      t.timestamps
    end
    add_index(:chapters,:story_id)
  end
end
