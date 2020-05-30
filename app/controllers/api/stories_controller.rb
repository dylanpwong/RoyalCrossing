require 'open-uri'
class Api::StoriesController < ApplicationController

    def index
        @stories = Story.all
        render :index
    end

    def show
        @story = Story.find(params[:id])
          if(@story)
            render :show
        else
            render json: ["No Story found!"]
        end
    end

    def create
        @story = Story.new(stories_params)

        if(@story.save)
            # debugger
            @story.photo.attach(io: open("https://royal-crossing-dev.s3.amazonaws.com/megumin.jpg"), filename: "megumin.jpg");
            # @story.photo.attach(io: File.open("/users/dylan/Documents/pictures/megumin.jpg"), filename: "megumin.jpg");
            # debugger
            params[:story][:genre_ids].each do |genre_id|
                Genres_join.create(genre_id: genre_id,story_id: @story.id);
            end
            # debugger
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end

    def edit
        @story = Story.find(params[:id]);
        @story.title = params[:story][:title];
        @story.synopsis = params[:story][:synopsis];
        @story.genre_ids = params[:story][:genre_ids];
        
        if(@story.save)
            render :show;
        else
            render json: @story.errors.full_messages, status: 422
        end

    end

    def add_follows

        # @follows = Follows_table.new()
    end

    def remove_follows
    end




    private

    def stories_params
        params.require(:story).permit(:title,:synopsis,:author_id,:genre_ids)
    end
end