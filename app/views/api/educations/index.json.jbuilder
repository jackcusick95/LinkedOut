@educations.each do |education|
    json.educations do 
        json.set! education.id do
            json.partial! "api/educations/education", education: education
        end 
    end 
end 