import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as SessionAPIUtils from './util/session_api_util';
import Root from './components/root';
import configureStore from './store/store';
import axios from 'axios';
import { fetchFortunes, fetchFortune } from './actions/fortune_actions';
import { fetchCalculations, postCalculation } from './actions/calculation_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  store = configureStore();
  // const currentTime = Date.now() /1000;

  const root = document.getElementById('root');

  window.fetchFortunes = fetchFortunes;
  window.fetchFortune = fetchFortune;

  window.fetchCalculations = fetchCalculations;
  window.createCalculation = postCalculation;

  window.getStore = store.getState;
  window.dispatch = store.dispatch;
  
  ReactDOM.render(<Root store={store}/>, root);

})

window.axios = axios;

