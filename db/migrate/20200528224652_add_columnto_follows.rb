class AddColumntoFollows < ActiveRecord::Migration[5.2]
  def change
    add_column :follows_tables, :user_id, :integer
    add_index :follows_tables,:story_id
    add_index :follows_tables, :user_id
  end
end
