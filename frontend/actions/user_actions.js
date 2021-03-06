import { RECEIVE_CURRENT_USER } from "./session_actions";
import * as users_util from '../util/user_api_utl';

export const receiveUser=(user)=>{
    return({
        type: RECEIVE_CURRENT_USER,
        user: user

    })
}

export const getUser=(userId)=>(dispatch)=>{
    return users_util.getUser(userId).then((res)=> dispatch(receiveUser(res)));
}

export const addFollow=(data)=>(dispatch)=>{
    return (users_util.addFollow(data).then((res)=>dispatch(receiveUser(res))))
}

export const removeFollow=(data)=>dispatch=>{
    return (users_util.removeFollow(data).then((res)=>dispatch(receiveUser(res))))
}