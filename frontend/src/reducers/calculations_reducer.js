import { 
  RECEIVE_CALCULATIONS, 
  RECEIVE_TWO_RANDOM_USERS, 
  RECEIVE_SINGLE_CALCULATION,
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
      debugger
      return action.calculations;
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
    default:
      return state;
  }
};

export default CalculationsReducer;
