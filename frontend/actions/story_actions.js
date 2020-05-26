import * as story_util from '../util/story_api_util';
import * as my_story_util from'../util/my_story_util';
import * as any_story_util from '../util/story_util';
import * as chapter_util from '../util/chapter_util';
export const RECEIVE_STORY = "RECEIVE_STORY";
export const RECEIVE_STORIES = "RECEIVE_STORIES";
export const DELETE_STORY = "DELETE_STORY";
export const RECEIVE_GENRES = "RECEIVE_GENRES"
export const RECEIVE_CHAPTER = "RECEIVE_CHAPTER";


export const receiveStory= (story)=>{

    //debugger
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

export const receiveGenres=(genres)=>{
    return({
        type: RECEIVE_GENRES,
        genres: genres
    })
}

const receiveChapter=(data)=>{
    return({
        type: RECEIVE_CHAPTER,
        chapter: data
    })
}
const removeChapter =(data)=>{
    return({
        type: "REMOVE_CHAPTER",
        chapterId : data
    })
}

export const editChapter=(data)=>dispatch=>{
    return chapter_util.editChapter(data).then((res)=>dispatch(receiveChapter(res)));
}
export const deleteChapter=(chapterId)=>dispatch=>{
    // return chapter_util.deleteChapter(chapterId).then((res)=>dispatch(removeChapter(res)));
    return chapter_util.deleteChapter(chapterId).then((res) => dispatch(receiveStory(res)));
}   

export const createChapter=(data)=>dispatch=>{
    return chapter_util.createChapter(data).then((res)=>dispatch(receiveChapter(res)))
}

export const fetchGenres =()=>dispatch=>{
    return story_util.fetchGenres().then((res)=> dispatch(receiveGenres(res)))
}

export const createAStory=(data)=>dispatch=>{
    return story_util.createStory(data).then((res)=>dispatch(receiveStory(res)))
}



export  const getAnyStory = (storyId)=> dispatch =>{
    return any_story_util.fetchAStory(storyId).then((res)=>dispatch(receiveStory(res)))
}

export const getStory = (storyId)=>dispatch=>{
    return story_util.fetchStory(storyId).then((res)=>dispatch(receiveStory(res)))
}

export const getStories = ()=>dispatch=>{
        //debugger
        return story_util.fetchStories().then((res)=>dispatch(receiveStories(res)))
}


export const getMyStories = (userId)=>dispatch=>{
    return my_story_util.fetchMyStory(userId).then((res)=>dispatch(receiveStories(res)))
}