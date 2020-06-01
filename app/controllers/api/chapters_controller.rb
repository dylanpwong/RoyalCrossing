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
            #debugger
            #chapter bug here
            
            @chapter.chapter_number = myStory.chapters.length
             @chapter.save
            render 'api/chapters/show'
        else
            render @chapter.errors.full_messages, status: 422
        end

    end

    def edit
        @chapter = Chapter.find(params[:id]);
        #debugger;
        @chapter.content = params[:chapter][:content];
        @chapter.title = params[:chapter][:title];
        @chapter.pre_note = params[:chapter][:pre_note];
        @chapter.post_note = params[:chapter][:post_note];
        
        #debugger;
        if(@chapter.save)
            render 'api/chapters/show'
        else
            render @chapter.errors.full_messages, status: 422
        end
    end

    def destroy
        @chapter = Chapter.find(params[:id]);
        @chapter.destroy;
        @story = Story.find(@chapter.story_id);
        render '/api/stories/show';
    end



    private
    def chapters_params
        params.require(:chapter).permit(:content,:title,:pre_note,:post_note,:story_id)
    end
end