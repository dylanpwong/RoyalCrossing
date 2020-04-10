class CreateGenresJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :genres_joins do |t|
      t.integer :genre_id
      t.integer :story_id
      t.timestamps
    end
  end
end
