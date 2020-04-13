



export const fetchAStory = (storyId) =>{
    return $.ajax({
        method: 'GET',
        url: `/api/stories/${storyId}`
    })
}   