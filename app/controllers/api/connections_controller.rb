class Api::ConnectionsController < ApplicationController

    def index
        # @connections = Connection.all.includes(:connecter)
        @connections = Connection.all
        render 'api/connections/index'
    end 

    def show
        @connection = Connection.includes(:connecter).find(params[:id])
        render 'api/connections/show'
    end 

    def create
        @connection = Connection.new(connection_params)
        # @connection = Connection.new(connected_id: params[:connected_id])
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
        params.require(:connection).permit(:connected_id, :connecter_id)
    end 

end 