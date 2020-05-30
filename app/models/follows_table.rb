# == Schema Information
#
# Table name: follows_tables
#
#  id       :bigint           not null, primary key
#  story_id :integer          not null
#  user_id  :integer
#
class Follows_table < ApplicationRecord
    
    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story
end
