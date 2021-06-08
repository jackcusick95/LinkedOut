import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form_container'; 
import SignUpFormContainer from './session_form/signup_form_container';
import BasePage from './base_page/base_page'; 
import FeedPageContainer from './feed_page/feed_page_container'; 
import Modal from './modal/modal'; 
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionProfileContainer from './profile_page/session_profile_container'; 
import JobsContainer from './base_page/jobs_container';

const App = () => {
    return (
        <div>
            <Modal />
            <ProtectedRoute component={NavBarContainer} />
           <Switch>
               <AuthRoute exact path="/" component={BasePage} />
               <AuthRoute exact path="/login" component={LoginFormContainer} /> 
               <AuthRoute exact path="/signup" component={SignUpFormContainer} />
               <AuthRoute exact path="/jobs" component={JobsContainer} />
               <ProtectedRoute exact path="/feed" component={FeedPageContainer} />
               <ProtectedRoute exact path="/profile" component={SessionProfileContainer} />
           </Switch>
       </div>
    )
}

export default App;