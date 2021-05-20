jobs = []
id = 1
@jobs.shuffle.each do |job|
    if !jobs.include?(job.company)
            json.set! id do
            json.extract! job, :id, :company
            json.photoUrl url_for(job.photo) if job.photo.attached?
        end
        jobs.push(job.company)
        id += 1
    end
end