import { combineReducers } from "redux";
import fortuneReducer from "./fortune_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  fortunes: fortuneReducer,
  users: usersReducer
});

export default entitiesReducer;