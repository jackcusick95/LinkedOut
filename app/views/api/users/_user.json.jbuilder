json.extract! user, :id, :email, :fname, :lname, :location, :zipcode, :title, :industry, :company, :description
json.profile_photo url_for(user.profile_photo) if user.profile_photo.attached?
json.wall_photo url_for(user.wall_photo) if user.wall_photo.attached?
