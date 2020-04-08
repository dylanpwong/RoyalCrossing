
import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_form_container'
import TopNav from './top_nav'

const App = ()=>{
    return(
        <>
            <h1><NavLink className="userNav" to="/"> Royal Crossing</NavLink></h1>
            <TopNav >
            <Route  exact path="/" component={HomeContainer}/>
            </TopNav>
        </>
    )
}

export default App