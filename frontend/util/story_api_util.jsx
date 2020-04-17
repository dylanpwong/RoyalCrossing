

export const fetchStories=()=>{
    return $.ajax({
        method: 'GET',
        url: '/api/stories'
    })
}

export const fetchStory=(storyId)=>{
    return $.ajax({
        method: 'GET',
        url: `/api/stories/${storyId}`
    })
}
export const fetchGenres=()=>{
    return $.ajax({
        method: 'GET',
        url: '/api/genres'
    })
}

// export const fetchAStory = (storyId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/stories/${storyId}`
//     })
// }   
export const createStory=(story)=>{
    // debugger
    return $.ajax({
        method: "POST",
        url: '/api/stories',
        data: {story}
    })
}