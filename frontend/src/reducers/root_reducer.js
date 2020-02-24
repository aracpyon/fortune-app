import { combineReducers } from 'redux';
import fortunesReducer from './fortunes_reducer';

export default combineReducers({
  fortunes: fortunesReducer
});