

# @stores = Story.all
# render :index

# json.array! @stories do |story|
#     json.set! story.id do
#         json.id story.id
#         json.synopsis story.synopsis
#         json.title story.title
#         json.genres story.genres
#     end
# end

# @stories.each do |story|
#     json.set! story.id do

#     end
# end

@stories.each do |story|
    json.set! story.id do
    json.extract! story, :id,:title
    json.photoUrl url_for(story.photo)
    json.genres story.genres
    json.author do
    json.id story.user.id
    json.username story.user.username
    json.photoUrl url_for(story.user.photo)
 end
        json.chapters do story.chapters.each_with_index do |chapter,idx|
        json.set! chapter.chapter_number do
            json.extract! chapter,:id, :content,:title,:pre_note,:post_note,:story_id,:created_at,:chapter_number
        end
    end
    end
end
end
