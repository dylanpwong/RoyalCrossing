

@my_stories.each do |story|
    json.set! story.id do
        json.title story.title
        json.synopsis story.synopsis
        json.id story.id
         json.author story.user
        json.photoUrl url_for(story.photo)
        json.genres story.genres
        #json.test 'TESST'
        #   @story.chapters.each do |chapter|
        #     json.set! chapter.id do
        #         json.extract! chapter,:id, :content,:title,:pre_note,:post_note,:story_id
        #     end
        # end
        json.followers do story.followed_users.each do|user|
            json.set! user.id do 
                json.extract! user,:id
            end
        end
         end

        
         json.chapters do story.chapters.each_with_index do |chapter,idx|
                    json.set! chapter.chapter_number do
                    json.extract! chapter,:id, :content,:title,:pre_note,:post_note,:story_id,:created_at,:chapter_number
                end
            end

            end
             
            
    end
end