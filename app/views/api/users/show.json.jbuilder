json.partial! '/api/users/user', user: @user
json.photoUrl url_for(@user.photo)