class Api::GenresController < ApplicationController



    def add_follows
        @follows = Follows_table.new(follows_params)
        if(@follows.save){

        }else{
            render json: @follows.errors.full_messages, status: 422
        }
    end

    def remove_follows
        @follows = Follows_table.find(params.find(:id))
    end

    def follows_params
        params.require(:follows).permit(:story_id,:user_id)
    end
end