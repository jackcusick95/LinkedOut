class Api::UsersController < ApplicationController

     protect_from_forgery
    
    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages
        end 
    end 
    
    def create
        @user = User.new(user_params)

        if @user.save 
            login!(@user)
            render 'api/users/show'
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

  
    private

    def user_params
        params.require(:user).permit(:email, :password, :fname, :lname, :location, :zipcode, :title, :industry, :company, :description, :profile_photo, :wall_photo)
    end 

end 