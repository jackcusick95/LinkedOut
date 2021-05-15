import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form_container'; 
import SignUpFormContainer from './session_form/signup_form_container';
import BasePage from './base_page/base_page'; 
import FeedPageContainer from './feed_page/feed_page_container'; 
import Modal from './modal/modal'; 

const App = () => {
    // const logo = require('../../app/assets/images/logo.png');
    return (
        <div>
            <Modal />
           <header>
               {/* <Link to={"/"}>
                    <img className='logo' src={window.logo} />
               </Link> */}
           </header>
           <Switch>
               <AuthRoute exact path="/" component={BasePage} />
               <AuthRoute exact path="/login" component={LoginFormContainer} /> 
               <AuthRoute exact path="/signup" component={SignUpFormContainer} />
               <ProtectedRoute exact path="/feed" component={FeedPageContainer} />

           </Switch>
       </div>
    )
}

export default App;