import { RECEIVE_TWO_RANDOM_USERS } from '../actions/calculation_actions';

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
      return Object.assign({}, state.randomUsers, {randomUsers: twoUsers}); 
    default:
      return state;
  }
};

export default CalculationReducer;