import * as sessionUtil from '../util/session_api_util';


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RECEIVE_LOGIN_USER ="RECEIVE_LOGIN_USER";
const receiveCurrentUser=(currentUser)=>{
   // debugger
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
const receiveLoginUser = (currentUser) => {
    return{
        type: RECEIVE_LOGIN_USER,
        user: currentUser

    }
}

const receiveErrors =(errors)=>{
    //debugger
    return ({
        type: RECEIVE_ERRORS,
        errors: Object.values(errors.responseJSON)
    });
}

export const signup=(user)=>(dispatch)=>{
    return sessionUtil.signup(user).then((Cuser)=>dispatch(receiveLoginUser(Cuser)),(error)=>dispatch(receiveErrors(error)))
}

export const login = user =>dispatch=>{
    return sessionUtil.login(user).then((user)=> dispatch(receiveLoginUser(user)),(error)=>{
        return dispatch(receiveErrors(error))})
}

export const logout =()=>dispatch=>{
    return sessionUtil.logout().then(()=>dispatch(logoutCurrentUser()))
}

export const demoLogin = () =>dispatch=>{
    return sessionUtil.demoLogin().then((res)=>dispatch(receiveCurrentUser(res)))
}