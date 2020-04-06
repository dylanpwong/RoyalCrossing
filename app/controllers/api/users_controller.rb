class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
        if(@user)
            render :show
        else
            render json: ["No User found!"]
        end
    end

    def create
        @user = Usern.new(users_params)

        if(@user.save)
            login(@user)
            render :show
        else
            render json: @users.errors.full_messages, status: 401
        end
    end


    def users_params
        params.require(user).permit(:username,:password)
    end
end