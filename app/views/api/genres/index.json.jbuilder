

# json.extract! @genres, :id,:name


@genres.each do |genre|
    json.set! genre.name do
        json.extract! genre, :id,:name
    end
end