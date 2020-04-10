# == Schema Information
#
# Table name: genres_joins
#
#  id         :bigint           not null, primary key
#  genre_id   :integer
#  story_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genres_join < ApplicationRecord 

    belongs_to :genre
    belongs_to :story
end
