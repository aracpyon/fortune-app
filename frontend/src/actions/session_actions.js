import * as SessionAPIUtils from "../util/session_api_util";
import jwt_decode from "jwt-decode";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_LOGIN = "RECEIVE_USER_LOGIN";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveSessionErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

const receiveUserLogin = () => {
  return {
    type: RECEIVE_USER_LOGIN
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const register = user => dispatch => {
  return SessionAPIUtils.register(user).then(
    user => dispatch(receiveUserLogin(user)),
    errors => dispatch(receiveSessionErrors(errors.response.data))
  );
};

export const login = user => dispatch => {
  return SessionAPIUtils.login(user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      SessionAPIUtils.setSessionToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch(errors => dispatch(receiveSessionErrors(errors)));
};

export const logout = () => dispatch => {
  localStorage.removeItem("jwtToken");
  SessionAPIUtils.setSessionToken(null);
  dispatch(logoutCurrentUser());
};
