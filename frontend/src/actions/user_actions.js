import * as APIUtils from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

const receiveAllUsers = users => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

const receiveSingleUser = user => {
  return {
    type: RECEIVE_SINGLE_USER,
    user
  };
};

export const fetchUsers = () => dispatch => {
  return APIUtils.fetchUsers().then(users => {
    dispatch(receiveAllUsers(users));
  });
};
