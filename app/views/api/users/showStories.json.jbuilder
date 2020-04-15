

@my_stories.each do |story|
    json.set! story.id do
        json.title story.title
        json.synopsis story.synopsis
        json.id story.id
         json.author story.user
        json.photoUrl url_for(story.photo)
        json.genres story.genres

        #   @story.chapters.each do |chapter|
        #     json.set! chapter.id do
        #         json.extract! chapter,:id, :content,:title,:pre_note,:post_note,:story_id
        #     end
        # end
    end
end