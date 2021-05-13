class User < ApplicationRecord 

    validates :email, :session_token, uniqueness: true 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :email, :session_token, :password_digest, presence: true 
    validates :fname, :lname, :location, :zipcode, presence: true 
    validates :title, :industry, :company, presence: true 

    has_many :posts,
     primary_key: :id,
     foreign_key: :author_id,
     class_name: :Post 

    after_initialize :ensure_session_token
    attr_reader :password 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token 
    end 

end 