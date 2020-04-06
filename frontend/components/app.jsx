
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home/home'
import LoginContainer from './session/login_form_container'

const App = ()=>{
    return(
        <>
            <h1>Royal Crossing</h1>
            <Route exact path="/" component={Home}/>
           
        </>
    )
}

export default App