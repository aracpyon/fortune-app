import { combineReducers } from "redux";
import fortuneReducer from "./fortune_reducer";
import usersReducer from "./users_reducer";
import calculationReducer from './calculations_reducer';

const entitiesReducer = combineReducers({
  fortunes: fortuneReducer,
  users: usersReducer,
  calculations: calculationReducer
});

export default entitiesReducer;