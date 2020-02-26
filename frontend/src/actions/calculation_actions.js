import * as APIUtil from "../util/calculation_api_util";

export const RECEIVE_TWO_RANDOM_USERS = "RECEIVE_TWO_RANDOM_USERS";

export const receiveTwoRandomUsers = twoRandomUsers => ({
  type: RECEIVE_TWO_RANDOM_USERS,
  twoRandomUsers
});

export const fetchTwoRandomUsers = () => dispatch => {
  return APIUtil.fetchTwoRandomUsers().then(twoRandomUsers =>
    dispatch(receiveTwoRandomUsers(twoRandomUsers))
  );
};
