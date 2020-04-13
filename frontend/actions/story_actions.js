import * as story_util from '../util/story_api_util';
import * as my_story_util from'../util/my_story_util';
import * as any_story_util from '../util/story_util';
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

export  const getAnyStory = (storyId)=> dispatch =>{
    return any_story_util.fetchAStory(storyId).then((res)=>dispatch(receiveStory(res)))
}

export const getStory = (storyId)=>dispatch=>{
    return story_util.fetchStory(storyId).then((res)=>dispatch(receiveStory(res)))
}

export const getStories = ()=>dispatch=>{
    return story_util.fetchStories().then((res)=>{
        //debugger
        return dispatch(receiveStory(res))}
        )
}

export const getMyStories = (userId)=>dispatch=>{
    return my_story_util.fetchMyStory(userId).then((res)=>dispatch(receiveStories(res)))
}