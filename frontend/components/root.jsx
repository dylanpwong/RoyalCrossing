import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app'
import LoginContainer from './session/login_form_container'
import SignupContainer from './session/signup_form_container'
import footer_container from './footer/footer_container'
const Root = ({store}) =>{
    return(
        <>
        <div className="reset">
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/account/login" component={LoginContainer} />
                    <Route exact path="/account/register" component={SignupContainer}/>
                    <Route path="/" component={App}/>
                </Switch>
                    {/* <Route path='/' component={footer_container}/>  */}
            </HashRouter>
        </Provider>
        </div>
        </>
    );
}
export default Root;