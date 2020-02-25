import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Root from './components/root';
import configureStore from './store/store';
// import jwt_decode from 'jwt-decode';
// import { setAuthToken } from './util/session_api_util';
// import { logout } from './actions/session_actions';
// import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { fetchFortunes, fetchFortune } from './actions/fortune_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore();
  // const currentTime = Date.now() /1000;

  const root = document.getElementById('root');

  window.fetchFortunes = fetchFortunes;
  window.fetchFortune = fetchFortune;
  window.getStore = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={store}/>, root);

})

window.axios = axios;

