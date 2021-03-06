import axios from 'axios';
import qs from 'qs';

export const getCalculations = () => {
  return axios.get('api/calculations');
};

export const getUserCalculations = userId => {
  return axios.get(`api/calculations/user/${userId}`);
}

export const fetchTwoRandomUsers = () =>{
  return axios.get('api/users/twousers');
};

// We have to do this because Node.js backend is only accepting
// data using the urlencoded format
export const createCalculation = twoUsers => {
  // return axios.post('api/calculations', twoUsers);
  return axios({
    method: 'post',
    url: 'api/calculations',
    data: qs.stringify(twoUsers), 
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
};
// export const getUserCalculations = (user_id) => {
//   return axios.get(`api/fortunes/user/${user_id}`);

// };