
import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import HomeContainer from './home/home_container'
import LoginContainer from './session/login_form_container'
import TopNav from './top_nav';
import UserShowContainer from './users_show/users_show_container'
import { AuthRoute } from '../util/route_util';
import myFictions_container from './fictions/myFictions/myFictions_container';
import MainNav from './mainNav/main_nav';
import HomePage from './home/home_page';
import home_page_container from './home/home_page_container';
import show_fictions_container from './fictions/show_fictions/show_fictions_container';

const App = ()=>{
    return(
        <>
            <div className='AppHolder'>
            <div className="topContainer">{/* the top container */}
            <h1><NavLink className="userNav fantasyStyle" to="/"> Royal Crossing</NavLink></h1>
            <TopNav > {/* user Menu Nav, the top right dropdown*/}
                <Route   path="/" component={HomeContainer}/>
            </TopNav>
            </div>

            <div className='BackgroundFixed'></div>
            {/* <section className="mainNav"></section> the main nav */}
            {/* <MainNav/> */}
            <div className='BelowHeader'>
                <Route path="/" component={MainNav}/>
                <div className="mainContentwrapper">{/*wraps main content on page*/}
                <Route exact path ="/" component={home_page_container}/>
                <Route path="/fiction/:storyId" component={show_fictions_container}/>
                <AuthRoute path="/profile/:userId" component={UserShowContainer}/>
                <AuthRoute path="/my/fictions" component={myFictions_container}/>
                {/* <Route path="/profile/:userId" component={UserShowContainer}/> */}
                </div>
            </div>
            </div>
        </> 
    )
}

export default App