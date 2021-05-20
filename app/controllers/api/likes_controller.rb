class Api::LikesController < ApplicationController

    def create
        @like = Like.new(like_params)
        if @like.save 
            render 'api/likes/show'
        else 
            render json: @like.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
            render 'api/likes/show'
        else 
            render json: ['Unable to find like'], status: 404
        end 
    end 

    private

    def like_params
        params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
    end 

end 