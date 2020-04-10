import { RECEIVE_STORY, RECEIVE_STORIES } from "../actions/story_actions"



const StoryReducer = (storyState={},action)=>{
    switch(action.type){

        case RECEIVE_STORIES:
            return Object.assign({},storyState,action.stories)

        case RECEIVE_STORY:
            return Object.assign({},storyState,{[action.story.id]: action.story})
        default:
            return storyState
    }
}

export default StoryReducer;