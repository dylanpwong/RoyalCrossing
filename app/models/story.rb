# == Schema Information
#
# Table name: stories
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  author_id   :integer          not null
#  synopsis    :text
#  genre_ids   :integer          default([]), is an Array
#  chapter_ids :integer          default([]), is an Array
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Story < ApplicationRecord
    validates :title, presence: true
     
    has_one_attached :photo

    belongs_to :user,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    has_many :chapters,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Chapter

    has_many :genre_joins,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Genres_join

    has_many :genres,
    through: :genre_joins,
    source: :genre

end
