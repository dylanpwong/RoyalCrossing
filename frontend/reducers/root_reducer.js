import { combineReducers } from "redux";
import userReducer from "./user_reducer";






const rootReducer = combineReducers({users: userReducer})


export default rootReducer;