import { RECEIVE_STORY, RECEIVE_STORIES, RECEIVE_CHAPTER, RECEIVE_MY_STORIES } from "../actions/story_actions"



const StoryReducer = (storyState={},action)=>{
    switch(action.type){

        case RECEIVE_STORIES:
            return Object.assign({},storyState,action.stories);

        case RECEIVE_STORY:
            return Object.assign({},storyState,{[action.story.id]: action.story});

        case RECEIVE_MY_STORIES:
            
            return Object.assign({},action.stories);

        case RECEIVE_CHAPTER:
            let newState = Object.assign({},storyState);
            // debugger
            newState[action.chapter.story_id].chapters = { [action.chapter.chapter_number]: action.chapter }
            return newState;
        case 'REMOVE_CHAPTER':
                // let newState = Object.assign({},storyState);
            break;
        default:
            return storyState
    }
}

export default StoryReducer;