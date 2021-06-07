
@jobs.each do |job|
    json.jobs do 
        json.set! job.id do
            json.partial! "api/jobs/job", job: job 
        end 
    end 
end 

# @jobs.each do |job|
#     json.set! job.user_id do
#         json.partial! "api/jobs/job", job: job 
#     end 
# end 