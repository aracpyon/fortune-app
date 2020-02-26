import * as APIUtil from "../util/calculation_api_util";

export const RECEIVE_TWO_RANDOM_USERS = "RECEIVE_TWO_RANDOM_USERS";
export const RECEIVE_SINGLE_CALCULATION = "RECEIVE_SINGLE_CALCULATION";

export const receiveTwoRandomUsers = twoRandomUsers => ({
  type: RECEIVE_TWO_RANDOM_USERS,
  twoRandomUsers
});

const receiveSingleCalculation = calculation => ({
  type: RECEIVE_SINGLE_CALCULATION,
  calculation
});

export const fetchTwoRandomUsers = () => dispatch => {
  return APIUtil.fetchTwoRandomUsers().then(twoRandomUsers =>
    dispatch(receiveTwoRandomUsers(twoRandomUsers))
  );
};

export const createCalculation = twoUsers => dispatch =>{
  return APIUtil.createCalculation(twoUsers).then(
    calculation => dispatch(receiveSingleCalculation(calculation))
  );
};