class Api::EducationsController < ApplicationController 

    def index
        @educations = Education.all 
        render 'api/educations/index'
    end 

    def show
        @education = Education.includes(:user).find(params[:id])
        render 'api/educations/show'
    end 

    def create
        @education = Education.new(education_params)
        @education.user_id = current_user.id 

        if @education.save
            render 'api/educations/show'
        else 
            render json: @education.errors.full_messages, status: 422
        end 
    end 

    def update
        @education = Education.find(params[:id])
        if @education.update(education_params)
            render "api/educations/show"
        else 
            render json: @education.errors.full_messages, status: 422 
        end 
    end 

    def destroy
        @education = current_user.educations.find_by(id: params[:id])
        
        if @education
            @education.destroy
        end 
    end 

    private

    def education_params
        params.require(:education).permit(:school, :degree, :field, :description, :start_date, :end_date, :photo)
    end 

end 