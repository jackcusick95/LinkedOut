@posts.each do |post|
    json.posts do
        json.set! post.id do
            json.partial! "api/posts/post", post: post 
        end 
    end 
    json.users do
        json.set! post.author_id do
            json.extract! post.author, :id, :fname, :lname, :title
        end
    end
    json.comments do 
        post.comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :body, :author_id, :post_id, :created_at, :updated_at 
            end  
        end 
    end 
end 
