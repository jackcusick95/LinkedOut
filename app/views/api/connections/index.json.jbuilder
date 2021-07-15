# @connections.each do |connection|
#     json.connections do
#         json.set! connection.id do
#             json.extract! connection, :id, :connecter_id, :connected_id, :created_at, :updated_at
#         end 
#     end 
# end 


@connections.each do |connection|
        json.set! connection.id do
            json.extract! connection, :id, :connecter_id, :connected_id, :created_at, :updated_at
        end 
end 
