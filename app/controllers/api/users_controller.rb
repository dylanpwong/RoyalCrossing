require 'open-uri'
class Api::UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        if(@user)
            render :show
        else
            render json: ["No User found!"]
        end
    end

    def show_stories
        @user = User.find(params[:id])
        if(@user)
            @my_stories= @user.stories
            if(@my_stories)
                render  "api/users/showStories"
            else
                render json: ["You have no stories written"]
            end
           
        else
            render json: ["No user found!"]
        end
    end

    def create
        @user = User.new(users_params)

        if(@user.save)
            login!(@user)
            @user.photo.attach(io: open("https://royal-crossing-dev.s3.amazonaws.com/prinny.jpg"), filename: "megumin.jpg");

            render :show
        else
            render json: {errors: @user.errors.full_messages}, status: 401
        end
    end


    def users_params
        params.require(:user).permit(:username,:password,:email,:gender,:birth,:location,:bio)
    end
end