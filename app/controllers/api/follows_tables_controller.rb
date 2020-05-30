class Api::FollowsTablesController < ApplicationController



    def add_follows
        @follows = Follows_table.new({story_id: params[:story_id],user_id: params[:id]})
        if(true)
            
        else
            render json: @follows.errors.full_messages, status: 422
        end
    end

    def remove_follows
        @follows = Follows_table.find(params.find(:id))
    end

    def follows_params
        params.require(:follows).permit(:story_id,:user_id)
    end
end