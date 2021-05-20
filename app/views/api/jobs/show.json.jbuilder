json.extract! @job, :id, :user_id, :title, :job_type, :company, :location, :start_date, :end_date, :description
json.photoUrl url_for(@job.photo) if @job.photo.attached?