import * as story_util from '../util/story_api_util'
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const DELETE_STORY = "DELETE_STORY";


export const receiveStory= (story)=>{
    return({
        type: RECEIVE_STORY,
        story: story
    })
}

export const receiveStories = (stories)=>{
    return({
        type: RECEIVE_STORIES,
        stories: stories
    })
}

export const deleteStory=()=>{
    return({
        type: DELETE_STORY,
    })
}

export const getStory = (storyId)=>dispatch=>{
    return story_util.fetchStory(storyId).then((res)=>dispatch(receiveStory(res)))
}

export const getStories = ()=>dispatch=>{
    return story_util.fetchStories().then((res)=>dispatch(receiveStory(res)))
}