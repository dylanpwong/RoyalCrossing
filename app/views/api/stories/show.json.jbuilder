# json.extract! user, :id,:username,:email,:created_at,:updated_at,:gender,:birth

# json.array @stories do |story|
#     json.set! story.id do
#         json.id story.id
#         json.synopsis story.synopsis
#         json.title story.title
#         json.genres story.genres
#     end
# end

#  json.extract! @story, :id,:title,:synopsis
# myUser = @story.user
# myUser[:photoUrl] = url_for(@story.user.photo)

 json.id @story.id
 json.title @story.title
 json.synopsis @story.synopsis
 json.author do
    json.id @story.user.id
    json.username @story.user.username
    json.photoUrl url_for(@story.user.photo)
 end
 json.photoUrl url_for(@story.photo)
 json.genres @story.genres

  json.chapters do @story.chapters.each_with_index do |chapter,idx|
    json.set! chapter.chapter_number do
        json.extract! chapter,:id, :content,:title,:pre_note,:post_note,:story_id,:created_at,:chapter_number
    end
 end

end


