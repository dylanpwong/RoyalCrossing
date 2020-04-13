# json.extract! user, :id,:username,:email,:created_at,:updated_at,:gender,:birth

# json.array @stories do |story|
#     json.set! story.id do
#         json.id story.id
#         json.synopsis story.synopsis
#         json.title story.title
#         json.genres story.genres
#     end
# end

 json.extract! @story, :id,:title,:synopsis
 json.author @story.user
 json.photoUrl url_for(@story.photo)
 json.genres @story.genres

