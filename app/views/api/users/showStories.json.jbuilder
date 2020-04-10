

@my_stories.each do |story|
    json.set! story.id do
        json.title story.title
        json.synopsis story.synopsis
        json.id story.id
    end
end