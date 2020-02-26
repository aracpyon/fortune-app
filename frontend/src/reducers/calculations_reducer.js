<<<<<<< HEAD
import { RECEIVE_CALCULATIONS, RECEIVE_TWO_RANDOM_USERS, RECEIVE_SINGLE_CALCULATION } from '../actions/calculation_actions';
=======
import { RECEIVE_TWO_RANDOM_USERS, RECEIVE_SINGLE_CALCULATION } from '../actions/calculation_actions';
>>>>>>> master

const initialState = {
  randomUsers: {

  },
  calculations: {

  }
};

<<<<<<< HEAD
const CalculationsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CALCULATIONS:
      return action.calculations;
    case RECEIVE_TWO_RANDOM_USERS:
      let twoUsers = {};
      action.twoRandomUsers.data.forEach(user => {
        twoUsers[user._id] = user;
      });
      return Object.assign({}, state, { randomUsers: twoUsers });
    case RECEIVE_SINGLE_CALCULATION:
      return Object.assign({}, state, {
        calculations: action.calculation.data
      });
=======
const CalculationReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TWO_RANDOM_USERS:
      let twoUsers = {};
      action.twoRandomUsers.data.forEach((user) =>{
        twoUsers[user._id] = user;
      });
      return Object.assign({}, state, {randomUsers: twoUsers}); 
    case RECEIVE_SINGLE_CALCULATION:
      return Object.assign({}, state, {calculations: action.calculation.data});
>>>>>>> master
    default:
      return state;
  }
};

<<<<<<< HEAD
export default CalculationsReducer;
=======
export default CalculationReducer;
>>>>>>> master
