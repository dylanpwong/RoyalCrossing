

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

// export const fetchAStory = (storyId) => {
//     return $.ajax({
//         method: 'GET',
//         url: `/api/stories/${storyId}`
//     })
// }   
export const createStory=(story)=>{
    return $.ajax({
        method: "POST",
        url: '/api/stories',
        data: {story}
    })
}