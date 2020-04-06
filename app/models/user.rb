# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    validates :username,presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length:{minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password


    def self.find_by_credentials(username,password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(pass)
        @password=pass
        self.password_digest = BCrypt::Password.create(pass)
    end

    def is_password?(pass)
        obj = BCrypt::Password.new(self.password_digest)
        obj.is_password?(pass)
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

end
