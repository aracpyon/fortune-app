import React from 'react';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './sessions/login_form_container';
import RegistrationFormContainer from './sessions/registration_form_container';

const App = () => (
  <div className="main-app-container">
    <h1>Hey</h1>
    <Switch>
      <LoginFormContainer />
      <RegistrationFormContainer />
    </Switch>
  </div>
);

export default App;