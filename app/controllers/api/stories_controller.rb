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
            render :show
        else
            render json: @story.errors.full_messages, status: 422
        end
    end




    private

    def stories_params{
        params.require(:story).permit(:title,:synopsis)
    }
end