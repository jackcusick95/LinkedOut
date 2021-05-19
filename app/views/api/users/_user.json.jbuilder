json.extract! user, :id, :email, :fname, :lname, :location, :zipcode, :title, :industry, :company
json.profile_photo url_for(user.profile_photo) if user.profile_photo.attached?
