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
end 