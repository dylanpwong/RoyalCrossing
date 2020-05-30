class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :follows_tables do |t|
      t.integer :story_id, null: false
    end
  end
end
