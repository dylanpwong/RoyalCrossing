class AddColumnChapters < ActiveRecord::Migration[5.2]
  def change
    add_column :chapters, :chapter_number, :integer
    add_index :chapters, :chapter_number
  end
end
