
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
import chapters_container from './fictions/chapters/chapters_container';
import createFiction_container from './fictions/myFictions/createFiction/createFiction_container';
import dash_container from './fictions/dashboard/dash_container';
import chapter_new_container from './fictions/chapters/chapter_new_container';
import chapter_edit_container from './fictions/chapters/chapter_edit_container';
import dashEdit_container from './fictions/dashboard/dashEdit_container';
import dashChapter_container from './fictions/dashboard/dashChapter_conatiner';

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
                <Route exact path="/fiction/:storyId" component={show_fictions_container}/>
                <Route exact path="/fiction/:storyId/chapters/:chapterId" component={chapters_container}/>
                <Route exact path="/fictions/submission" component={createFiction_container}/>
                <Route exact path="/my/fiction/:storyId" component={dash_container}/>
                <Route exact path="/fiction/chapter/new/:storyId" component={chapter_new_container}/>
                <Route exact path='/my/fiction/:storyId/edit' component ={dashEdit_container}/>
                <Route exact path='/fiction/:storyId/chapter/edit/:chapterNumber' component={chapter_edit_container}/>
                <Route exact path='/my/fiction/:storyId/chapters' component={dashChapter_container}/>
                <AuthRoute exact path="/profile/:userId" component={UserShowContainer}/>
                <AuthRoute exact path="/my/fictions" component={myFictions_container}/>
                {/* <Route path="/profile/:userId" component={UserShowContainer}/> */}
                </div>  
            </div>
            </div>
        </> 
    )
}

export default App