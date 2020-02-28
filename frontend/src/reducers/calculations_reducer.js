import { 
  RECEIVE_CALCULATIONS, 
  RECEIVE_TWO_RANDOM_USERS, 
  RECEIVE_SINGLE_CALCULATION,
  RECEIVE_USER_CALCULATIONS,
  // SEND_CALCULATION 
} from '../actions/calculation_actions';

const initialState = {
  randomUsers: {

  },
  calculations: {

  }
};

const CalculationsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CALCULATIONS:
  
      return action.calculations.data;
    case RECEIVE_TWO_RANDOM_USERS:
      let twoUsers = {};
      action.twoRandomUsers.data.forEach(user => {
        twoUsers[user._id] = user;
      });
      return Object.assign({}, state, { randomUsers: twoUsers });
    case RECEIVE_SINGLE_CALCULATION:
      return Object.assign({}, state, {
        calculations: action.calculation.data.calculation
      });
    case RECEIVE_USER_CALCULATIONS: 
      return action.calculations;
    default:
      return state;
  }
};

export default CalculationsReducer;
