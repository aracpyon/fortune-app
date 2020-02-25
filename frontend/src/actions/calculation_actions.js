import * as APIUtil from '../util/calculation_api_util';

export const RECEIVE_CALCULATIONS = 'RECEIVE_CALCULATIONS';
export const RECEIVE_CALCULATION = 'RECEIVE_CALCULATION';

export const receiveCalculations = calculations => ({
  type: RECEIVE_CALCULATIONS,
  calculations
});

export const receiveCalculation = calculation => ({
  type: RECEIVE_CALCULATION,
  calculation
});

export const fetchCalculations = () => dispatch => {
  return APIUtil.getCalculations()
    .then(calculations => dispatch(receiveCalculations(calculations)))
    .catch(err => console.log(err))
};

export const postCalculation = calculation => dispatch => {
  return APIUtil.createCalculation(calculation)
    .then(calculation => dispatch(receiveCalculation(calculation)))
    .catch(err => console.log(err))
};