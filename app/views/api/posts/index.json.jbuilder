@posts.each do |post|
    json.posts do
        json.set! post.id do
            json.partial! "api/posts/post", post: post 
        end 
    end 
    json.users do
        json.set! post.author_id do
            json.extract! post.author, :id, :fname, :lname, :title, :location, :description
            json.profile_photo url_for(post.author.profile_photo) if post.author.profile_photo.attached?
            json.wall_photo url_for(post.author.wall_photo) if post.author.wall_photo.attached?
        end
    end
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :author_id, :post_id, :created_at, :updated_at 
            end  
        end 
    end 

    json.likes do
        post.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like 
            end 
        end 

        post.comments.each do |comment|
            comment.likes.each do |like|
                json.set! like.id do 
                    json.partial! 'api/likes/like', like: like
                end
            end
        end 
    end
end 
