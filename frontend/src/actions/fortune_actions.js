import * as APIUtil from "../util/fortune_api_util";

export const RECEIVE_FORTUNES = 'RECEIVE_FORTUNES';
export const RECEIVE_FORTUNE = 'RECEIVE_FORTUNE';
export const RECEIVE_USER_FORTUNES = 'RECEIVE_USER_FORTUNES';

export const receiveFortunes = fortunes => ({
  type: RECEIVE_FORTUNES,
  fortunes
});

export const receiveFortune = fortune => ({
  type: RECEIVE_FORTUNE,
  fortune
})

export const receiveUserFortunes = fortunes => ({
  type: RECEIVE_USER_FORTUNES,
  fortunes
});

export const fetchFortunes = () => dispatch => {
  debugger
  return APIUtil.getFortunes()
    .then(fortunes => dispatch(receiveFortunes(fortunes)))
    .catch(err => console.log(err))
}

export const fetchFortune = fortuneId => dispatch => {
  debugger
  return APIUtil.getFortune(fortuneId)
    .then(fortune => dispatch(receiveFortune(fortune)))
    .catch(err => console.log(err))
};

export const fetchUserFortunes = userId => dispatch => {
  return APIUtil.getUserFortunes(userId)
    .then(fortunes => dispatch(receiveUserFortunes(fortunes)))
    .catch(err => console.log(err))
};



