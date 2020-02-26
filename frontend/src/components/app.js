import React from "react";
import { Switch } from "react-router-dom";
import LoginFormContainer from "./sessions/login_form_container";
import RegistrationFormContainer from "./sessions/registration_form_container";
import SplashPage from "./splash/main_spash";
import { Route } from "react-router-dom";
import RandomCalcContainer from "./calculation/rand_calc_container";

const App = () => (
  <div className="main-app-container">
    <h1>Hey</h1>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={RegistrationFormContainer} />
      <Route exact path="/randomcalc" component={RandomCalcContainer} />
    </Switch>
  </div>
);

export default App;
