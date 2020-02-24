import { RECEIVE_FORTUNES, RECEIVE_USER_FORTUNES, RECEIVE_FORTUNE } from '../actions/fortune_actions';

const FortuneReducers = (state = { all: {}, user: {} }, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch(action.type){
    case RECEIVE_FORTUNES:
      newState.all = action.fortunes.data;
      return newState;
    case RECEIVE_FORTUNE:
      newState.all = action.fortune.data;
      return newState;
    case RECEIVE_USER_FORTUNES:
      newState.user = action.fortunes.data;
      return newState;
    default:
      return state;
    
  }
}

export default FortuneReducers;