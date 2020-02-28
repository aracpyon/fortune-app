import * as APIUtil from "../util/fortune_api_util";

export const RECEIVE_FORTUNES = 'RECEIVE_FORTUNES';
export const RECEIVE_FORTUNE = 'RECEIVE_FORTUNE';


export const receiveFortunes = fortunes => ({
  type: RECEIVE_FORTUNES,
  fortunes
});

export const receiveFortune = fortune => ({
  type: RECEIVE_FORTUNE,
  fortune
});

export const fetchFortunes = () => dispatch => {
 
  return APIUtil.getFortunes()
    .then(fortunes => dispatch(receiveFortunes(fortunes)))
    .catch(err => console.log(err))
}

export const fetchFortune = fortuneId => dispatch => {

  return APIUtil.getFortune(fortuneId)
    .then(fortune => dispatch(receiveFortune(fortune)))
    .catch(err => console.log(err))
};

export const fetchUserFortunes = userId => dispatch => {
  return APIUtil.getUserFortunes(userId)
    .then(fortunes => dispatch(receiveFortunes(fortunes)))
    .catch(err => console.log(err))
};



