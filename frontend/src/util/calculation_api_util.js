import axios from 'axios';
import qs from 'qs';

<<<<<<< HEAD
export const getCalculations = () => {
  return axios.get('api/calculations')
};

// export const createCalculation = data => {
//   return axios.post('api/calculations/', data)

// };

export const fetchTwoRandomUsers = () =>{
  return axios.get('api/users/twousers');
}
=======
export const fetchTwoRandomUsers = () =>{
  return axios.get('api/users/twousers');
};
>>>>>>> master

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