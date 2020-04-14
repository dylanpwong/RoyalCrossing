# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Story.destroy_all
Genre.destroy_all
Genres_join.destroy_all
Chapter.destroy_all

password = BCrypt::Password.create("123456")
user1 = User.create(username: :demouser,email: "demo@gmail.com",password_digest: password,gender: :male,location: "NY")

user1.photo.attach(io: File.open("/users/dylan/Documents/pictures/megumin.jpg"), filename: "megumin.jpg")
romance = Genre.create(name: :romance)
action = Genre.create(name: :action)
comedy = Genre.create(name: :comedy)
horror= Genre.create(name: :horror)

synopsis1 = "Deep in the mountains laid a mystic scroll, that would grant great power. Travelers from across the globe all seeked the mysterious power, and many have died trying to claim its secrets."

story1 = Story.create(title: "Mystic Mountain",author_id: user1.id,synopsis: synopsis1)
story1.photo.attach(io: File.open("/users/dylan/Documents/pictures/megumin.jpg"), filename: "megumin.jpg");
# story1.photo.attach(io: File.open(Rails.root,"app/assets/images/megumin.jpg"), filename: "megumin.jpg");
genreJoin1 = Genres_join.create(genre_id: romance.id,story_id: story1.id);
genreJoin2 = Genres_join.create(genre_id: comedy.id,story_id: story1.id);
