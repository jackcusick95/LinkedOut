class Connection < ApplicationRecord

    validates :connecter_id, :connected_id, presence: true
    validates :connected_id, uniqueness: {scope: [:connecter_id]}

    belongs_to :connecter,
        primary_key: :id,
        foreign_key: :connecter_id,
        class_name: :User

    belongs_to :post,
       primary_key: :id,
       foreign_key: :likeable_id,
       class_name: :Post
end 