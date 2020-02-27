import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
      let allUsers = {};
      action.users.data.forEach( user => {
        allUsers[user._id] = user;
      });
      return Object.assign({}, state, allUsers);
    default:
      return state;
  }
};

export default usersReducer;
