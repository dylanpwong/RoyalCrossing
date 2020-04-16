import { combineReducers } from "redux";
import userReducer from "./user_reducer";
import StoryReducer from "./story_reducer";
import GenresReducer from "./genres_reducer";



const entitiesReducer = combineReducers({
    users: userReducer,
    stories: StoryReducer,
    genres: GenresReducer
})

export default entitiesReducer;