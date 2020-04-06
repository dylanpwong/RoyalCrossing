import * as sessionUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';

const receiveCurrentUser=(currentUser)=>{
    return({
        type: RECEIVE_CURRENT_USER,
        user: currentUser
    })
}

const logoutCurrentUser=()=>{
    return({
        type: LOGOUT_USER
    })
}

const receiveErrors =(errors)=>{
    return ({
        type: RECEIVE_ERRORS,
        errors: errors
    });
}

export const signup=(user)=>(dispatch)=>{
    return sessionUtil.signup(user).then((Cuser)=>dispatch(receiveCurrentUser(Cuser)))
}

export const login = user =>dispatch=>{
    return sessionUtil.login(user).then((user)=>dispatch(receiveCurrentUser(user)))
}

export const logout =()=>dispatch=>{
    return sessionUtil.logout().then(()=>dispatch(logoutCurrentUser()))
}