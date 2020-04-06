import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app'
import LoginContainer from './session/login_form_container'

const Root = ({store}) =>{
    return(
        <>
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path="/account/login" component={LoginContainer} />
                    <Route path="/" component={App}/>
                </Switch>
            </HashRouter>
        </Provider>
        </>
    );
}
export default Root;