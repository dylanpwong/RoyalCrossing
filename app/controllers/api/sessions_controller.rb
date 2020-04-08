class Api::SessionsController < ApplicationController

    def new
    end

    def create
        @user = User.find_by_credentials(params[:user][:email],params[:user][:password])

        if(@user)
            login!(@user)

            render "api/users/show"
        else
            render json: { error: ["Invalid email address or password"]}, status: 422
        end
    end

    def destroy
        if logged_in?
            logout!
            render json:{}
        else
            render json: ["No User to Logout"]
        end
    end
end