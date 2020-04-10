import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import StoryReducer from "./story_reducer";



const entitiesReducer = combineReducers({
    users: userReducer,
    stories: StoryReducer
})

export default entitiesReducer;