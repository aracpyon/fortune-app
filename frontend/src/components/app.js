import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';
import SplashPage from "./splash/main_spash";

const App = () => (
  <div className="main-app-container">
    <h1>Hey</h1>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={RegistrationFormContainer}/>
    </Switch>
  </div>
);

export default App;