class Api::ChaptersController < ApplicationController




    def show
        @chapter = Chapter.find(params[:id])
        if(@chapter)
            render :show
        else
            render json: ["No Chapter found!"]
        end
    end

    def create
        @chapter = Chapter.new(chapters_params)

        if(@chapter.save)
            myStory = Story.find(params[:chapter][:story_id])
            @chapter.chapter_number = myStory.chapters.length + 1
             @chapter.save
            render 'api/chapters/show'
        else
            render @chapter.errors.full_messages, status: 422
        end

    end

    def edit
    end

    def destroy
    end



    private
    def chapters_params
        params.require(:chapter).permit(:content,:title,:pre_note,:post_note,:story_id)
    end
end