class Api::JobsController < ApplicationController 

    def index
        @jobs = Job.all 
        render 'api/jobs/index'
    end 

    def show
        @job = Job.includes(:user).find(params[:id])
        render 'api/jobs/show'
    end 

    def create
        @job = Job.new(job_params)
        @job.user_id = current_user.id 

        if @job.save
            render 'api/jobs/show'
        else 
            render json: @job.errors.full_messages, status: 422
        end 
    end 

    def update
        @job = Job.find(params[:id])
        if @job.update(job_params)
            render "api/jobs/show"
        else 
            render json: @job.errors.full_messages, status: 422 
        end 
    end 

    def destroy
        @job = current_user.jobs.find_by(id: params[:id])
        
        if @job
            @job.destroy
        end 
    end 

    private

    def job_params
        params.require(:job).permit(:title, :job_type, :company, :location, :start_date, :end_date, :photo)
    end 

end 