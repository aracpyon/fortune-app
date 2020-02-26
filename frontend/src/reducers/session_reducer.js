import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGIN,
  LOGOUT_CURRENT_USER
} from "../actions/session_actions";

const nullState = {
    isAuthenticated: false,
    user: {}
}

const sessionReducer = (state = nullState, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
          ...state,
          isAuthenticated: !!action.user,
          user: action.user
      };
    case RECEIVE_USER_LOGIN: 
      return {
          ...state,
          isLoggedIn: true
      }
    case LOGOUT_CURRENT_USER:
        return {
          isAuthenticated: null,
          user: undefined
        }
    default:
      return state;
  }
};

export default sessionReducer;
