class Api::SessionsController < ApplicationController

    protect_from_forgery
    
    # def new
    # end 

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger 
        if @user
            login!(@user)
            render "api/users/show"
        else 
            render json: ["invalid username or password"], status: 401
        end 
    end 

    def destroy
        @user = current_user
        if @user 
            logout!
            render "api/users/show"
        else 
            render json: ["You are not signed in"], status: 404 
        end 
    end 

end 