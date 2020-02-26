import { RECEIVE_TWO_RANDOM_USERS, RECEIVE_SINGLE_CALCULATION } from '../actions/calculation_actions';

const initialState = {
  randomUsers: {

  },
  calculations: {

  }
};

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
    default:
      return state;
  }
};

export default CalculationReducer;