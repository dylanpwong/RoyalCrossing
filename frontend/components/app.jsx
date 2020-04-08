
import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_form_container'
import TopNav from './top_nav';
import UserShowContainer from './users_show/users_show_container'

const App = ()=>{
    return(
        <>
            <h1><NavLink className="userNav" to="/"> Royal Crossing</NavLink></h1>
            <TopNav > {/* user Menu Nav, the top right dropdown*/}
                <Route  exact path="/" component={HomeContainer}/>
            </TopNav>

            <section className="mainNav"></section> {/*the main nav*/}
            <div className="mainContentwrapper">{/*wraps main content on page*/}
            <Route path="/profile/:userId" component={UserShowContainer}/>
            </div>
        </> 
    )
}

export default App