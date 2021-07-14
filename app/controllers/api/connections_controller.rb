class Api::ConnectionsController < ApplicationController

    def index
        @connections = Connection.all.includes(:connecter)
        render 'api/connections/index'
    end 

    def create
        @connection = Connection.new(connection_params)
        @connection.connecter_id = current_user.id 
        
        if @connection.save! 
            render 'api/connections/show'
        else 
            render json: @connection.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @connection = Connection.find_by(id: params[:id])
        if @connection
            @connection.destroy
            render 'api/connections/show'
        else 
            render json: ['Unable to find connection'], status: 404
        end 
    end 

    private

    def connection_params
        params.require(:connection).permit(:connected_id)
    end 

end 