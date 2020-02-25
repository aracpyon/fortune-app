import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer
})

export default errorsReducer;