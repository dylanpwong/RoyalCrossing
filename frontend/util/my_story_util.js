// /users/stories /: id


export const fetchMyStory =(userId)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/stories`
    })
}

export const editMyStory = (story)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/stories/${story.id}/edit`,
        data: {story}
    })
}

