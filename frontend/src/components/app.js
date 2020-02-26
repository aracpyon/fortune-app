import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_utils';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';
import SplashPage from "./splash/main_spash";
import { Route } from "react-router-dom";
import RandomCalcContainer from "./calculation/rand_calc_container";
// import PlayPageContainer from "./fortune/play_container";
import PlayPage from './fortune/play_page';

const App = () => (
  <div className="main-app-container">
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route path="/login" component={LoginFormContainer}/>
      <Route path="/signup" component={RegistrationFormContainer}/>
      <Route exact path="/randomcalc" component={RandomCalcContainer} />
      <Route path="/play" component={PlayPage} />
    </Switch>
  </div>
);

export default App;
