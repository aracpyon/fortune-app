import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';
import SplashPage from "./splash/main_spash";
import RandomCalcContainer from "./calculation/rand_calc_container";
import PlayPageContainer from "./fortune/play_container";
import HistoryPageContainer from "./history/history_container";

const App = () => (
  <div className="main-app-container">
    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={RegistrationFormContainer}/>
      <ProtectedRoute path="/randomcalc" component={RandomCalcContainer} />
      <ProtectedRoute path="/history" component={HistoryPageContainer} />
      <ProtectedRoute path="/play" component={PlayPageContainer} />
    </Switch>
  </div>
);

export default App;
