import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";




const ErrorsRoot=combineReducers({
    session: sessionErrorsReducer
})

export default ErrorsRoot


