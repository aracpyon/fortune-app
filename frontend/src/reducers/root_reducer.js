import { combineReducers } from 'redux';
import fortuneReducer from './fortune_reducer';

export default combineReducers({
  fortunes: fortuneReducer
});