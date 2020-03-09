import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';
import SplashPage from "./splash/main_splash";
import RandomCalcContainer from "./calculation/rand_calc_container";
import HistoryPageContainer from "./history/history_container";
import PlayContainer from "./fortune/play_container";
import ResultContainer from './calculation/result_container';
import Creators from './splash/creators';

const App = () => (
  <div className="main-app-container">
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={RegistrationFormContainer}/>
      <ProtectedRoute path="/history" component={HistoryPageContainer} />
      <ProtectedRoute path="/play" component={PlayContainer} />
      <ProtectedRoute path="/result" component={ResultContainer} />
      <Route path="/creators" component={Creators} />
      <AuthRoute path="/" component={SplashPage} />
    </Switch>
  </div>
);

export default App;
