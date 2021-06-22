class Post < ApplicationRecord

    validates :body, presence: true
    validates :author_id, presence: true 

    has_one_attached :photo

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 

    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment 

    has_many :likes,
       primary_key: :id,
       foreign_key: :likeable_id,
       class_name: :Like
end  