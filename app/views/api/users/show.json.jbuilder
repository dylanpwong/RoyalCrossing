json.partial! '/api/users/user', user: @user
json.photoUrl url_for(@user.photo)

json.follows do @user.followed_stories.each do |story|
    json.set! story.id do 
                  
                    json.title story.title
                    json.synopsis story.synopsis
                    json.id story.id
                    json.author story.user
                    json.photoUrl url_for(story.photo)
                    json.genres story.genres
                    json.followId story.follows.find_by(story_id: story.id, user_id: @user.id).id
                    
    end
end
end