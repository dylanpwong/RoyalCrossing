import { RECEIVE_CURRENT_USER, LOGOUT_USER } from "../actions/session_actions";



const nullSession={
    id: null
}
const sessionReducer=(state=nullSession,action)=>{
    Object.freeze(state);
    switch(action.type){

        case RECEIVE_CURRENT_USER:
            return {id: action.user.id}

            case LOGOUT_USER:
                return nullSession;
        default:
            return state;
    }
}

export default sessionReducer;