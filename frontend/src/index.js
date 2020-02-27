import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/root';
import configureStore from './store/store';
import { setSessionToken } from './util/session_api_util';
import jwt_decode from 'jwt-decode';
import { login, logout } from './actions/session_actions';

import axios from 'axios';
import { fetchFortunes, fetchFortune, fetchUserFortunes } from './actions/fortune_actions';
import { fetchCalculations } from './actions/calculation_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(localStorage.jwtToken) {
    setSessionToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
        session: {
            isAuthenticated: true,
            user: decoded
        }
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() /1000;

    if(decoded.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = '/login';
    }
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');

  // testing
  window.fetchFortunes = fetchFortunes;
  window.fetchFortune = fetchFortune;
  window.fetchUserFortunes = fetchUserFortunes;
  window.login = login;

  window.fetchCalculations = fetchCalculations;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // testing 
  ReactDOM.render(<Root store={store}/>, root);

});

window.axios = axios;

