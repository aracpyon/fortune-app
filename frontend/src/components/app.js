import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import SplashPage from "./splash/main_spash";
const App = () => (
  <Switch>
    <Route exact path="/" component={SplashPage} />
    <h1>Hey</h1>
  </Switch>
);

export default App;