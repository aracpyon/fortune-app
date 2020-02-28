import * as APIUtil from '../util/calculation_api_util';

export const RECEIVE_CALCULATIONS = 'RECEIVE_CALCULATIONS';
export const RECEIVE_SINGLE_CALCULATION = "RECEIVE_SINGLE_CALCULATION";
export const RECEIVE_TWO_RANDOM_USERS = "RECEIVE_TWO_RANDOM_USERS";


export const receiveCalculations = calculations => ({
  type: RECEIVE_CALCULATIONS,
  calculations
});

export const receiveSingleCalculation = calculation => ({
  type: RECEIVE_SINGLE_CALCULATION,
  calculation
});

export const receiveTwoRandomUsers = twoRandomUsers => ({
  type: RECEIVE_TWO_RANDOM_USERS,
  twoRandomUsers
});


export const fetchUserCalculations = userId => dispatch => {
  return APIUtil.getUserCalculations(userId)
  .then(calculations => dispatch(receiveCalculations(calculations)))
  .catch(err => console.log(err))
};

export const fetchCalculations = () => dispatch => {
  return APIUtil.getCalculations()
    .then(calculations => dispatch(receiveCalculations(calculations)))
    .catch(err => console.log(err))
};
  
export const fetchTwoRandomUsers = () => dispatch => {
  return APIUtil.fetchTwoRandomUsers().then(twoRandomUsers =>
    dispatch(receiveTwoRandomUsers(twoRandomUsers))
  );
};

export const createCalculation = twoUsers => dispatch =>{
  
  return APIUtil.createCalculation(twoUsers)
    .then(calculation => {
     dispatch(receiveSingleCalculation(calculation))
    }).catch(err => console.log(err));
};