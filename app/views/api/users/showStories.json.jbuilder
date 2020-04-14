

@my_stories.each do |story|
    json.set! story.id do
        json.title story.title
        json.synopsis story.synopsis
        json.id story.id
         json.author story.user
        json.photoUrl url_for(story.photo)
        json.genres story.genres
    end
end