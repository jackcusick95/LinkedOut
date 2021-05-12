json.extract! post, :id, :body, :author_id, :created_at, :updated_at
if post.photo.attached? 
    json.photoUrl url_for(post.photo)
end 