import { RECEIVE_GENRES } from "../actions/story_actions";



const GenresReducer = (state={},action)=>{
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_GENRES:
        return Object.assign({},state,action.genres)

        default:
            return state;
    }
}

export default GenresReducer;