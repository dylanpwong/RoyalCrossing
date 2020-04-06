import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

document.addEventListener("DOMContentLoaded",()=>{
    let preloadedState={};
    if(window.currentUser){
        preloadedState={
            entities:{
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {id: window.currentUser.id}
        }
    }
    delete window.currentUser;
    
    const store = configureStore();

    ReactDOM.render(<Root store={store}/>,document.getElementById('root'))
})