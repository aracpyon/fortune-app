import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';
import SplashPage from "./splash/main_spash";
import { Route } from "react-router-dom";
import RandomCalcContainer from "./calculation/rand_calc_container";

const App = () => (
  <div className="main-app-container">
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={RegistrationFormContainer}/>
      <Route exact path="/randomcalc" component={RandomCalcContainer} />
    </Switch>
  </div>
);

export default App;
