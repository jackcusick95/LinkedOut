import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LoginFormContainer from './session_form/login_form_container'; 
import SignUpFormContainer from './session_form/signup_form_container';
import BasePageContainer from './base_page/base_page_container'; 

const App = () => {
    return (
        <div>
           <header>
               <Link to={"/"}>
                    <h1>LinkedOut</h1>
               </Link>
           </header>
           <Switch>
               <Route exact path="/" component={BasePageContainer} />
               <AuthRoute exact path="/login" component={LoginFormContainer} /> 
               <AuthRoute exact path="/signup" component={SignUpFormContainer} />
           </Switch>
       </div>
    )
}

export default App;