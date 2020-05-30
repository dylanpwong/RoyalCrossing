# == Schema Information
#
# Table name: chapters
#
#  id             :bigint           not null, primary key
#  title          :string           not null
#  content        :text
#  pre_note       :text
#  post_note      :text
#  story_id       :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  chapter_number :integer
#
class Chapter < ApplicationRecord
    validates :title, presence: true


    belongs_to :story,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Story
    
end
