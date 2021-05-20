class Job < ApplicationRecord 

    validates :user_id, :title, :company, :start_date, :end_date, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :photo 

end 