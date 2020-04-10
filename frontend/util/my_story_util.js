// /users/stories /: id


export const fetchMyStory =(userId)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}/stories`
    })
}