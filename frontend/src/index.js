import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';
import * as SessionAPIUtils from '../util/session_api_util';

ReactDOM.render(<App />, document.getElementById('root'));

window.axios = axios;
