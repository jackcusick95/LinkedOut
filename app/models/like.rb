class Like < ApplicationRecord

    validates :liker_id, :likeable_id, :likeable_type, presence: true
    validates :likeable_id, uniqueness: {scope: [:liker_id]}

    belongs_to :liker,
        primary_key: :id,
        foreign_key: :liker_id,
        class_name: :User

    belongs_to :post,
       primary_key: :id,
       foreign_key: :likeable_id,
       class_name: :Post
end 