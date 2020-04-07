import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
//import sessionErrorsReducer from "./session_errors_reducer";
import sessionReducer from "./session_reducer";
import ErrorsRoot from "./errors_root";






const rootReducer = combineReducers({
    entities: entitiesReducer,
    errors: ErrorsRoot,
    session: sessionReducer})


export default rootReducer;