import { RECEIVE_CALCULATIONS, RECEIVE_CALCULATION } from '../actions/calculation_actions';

const calculationReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type){
    case RECEIVE_CALCULATIONS:
      return action.calculations;
    case RECEIVE_CALCULATION:
      return Object.assign({}, state, { [action.calculation.id]: action.calculation });
    default:
      return state;
  }
}

export default calculationReducer;