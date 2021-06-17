json.extract! education, :id, :user_id, :school, :degree, :field, :description, :start_date, :end_date
json.photoUrl url_for(education.photo) if education.photo.attached?