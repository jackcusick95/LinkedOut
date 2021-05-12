class Post < ApplicationRecord

    validates :body, presence: true
    validates :author_id, uniqueness: true 

    has_one_attached :photo

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User 

end  