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
#  gender          :string
#  birth           :date
#  bio             :string
#  location        :string
#
class User < ApplicationRecord
    validates :username,presence: true, uniqueness: true
    validates :password_digest,:email, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length:{minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token
    attr_reader :password

    has_many :stories,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Story

    has_many :follows,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follows_table

    has_many :followed_stories,
    through: :follows,
    source: :story

    has_one_attached :photo

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password=password
        self.password_digest = BCrypt::Password.create(password)
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
