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

# user1.photo.attach(io: File.open("/users/dylan/Documents/pictures/megumin.jpg"), filename: "megumin.jpg")
user1.photo.attach(io: open("https://royal-crossing-dev.s3.amazonaws.com/prinny.jpg"), filename: "megumin.jpg");
romance = Genre.create(name: :romance)
action = Genre.create(name: :action)
comedy = Genre.create(name: :comedy)
horror= Genre.create(name: :horror)

synopsis1 = "Deep in the mountains laid a mystic scroll, that would grant great power. Travelers from across the globe all seeked the mysterious power, and many have died trying to claim its secrets."

story1 = Story.create(title: "Mystic Mountain",author_id: user1.id,synopsis: synopsis1)
# story1.photo.attach(io: File.open("/users/dylan/Documents/pictures/megumin.jpg"), filename: "megumin.jpg");
story1.photo.attach(io: open("https://royal-crossing-dev.s3.amazonaws.com/megumin.jpg"), filename: "megumin.jpg");
genreJoin1 = Genres_join.create(genre_id: romance.id,story_id: story1.id);
genreJoin2 = Genres_join.create(genre_id: comedy.id,story_id: story1.id);

content1= "Long ago we traveled to unknown lands traveling for ages, to find the ancient stone, that would unlock the gifts. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
preNote= "Thanks for stopping by"
postNote="Thanks for Reading"
chapter1 = Chapter.create(title: "The Travel", content: content1,pre_note: preNote,post_note: postNote,story_id: story1.id,chapter_number: 1)