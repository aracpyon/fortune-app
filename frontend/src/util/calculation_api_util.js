import axios from 'axios';

export const fetchTwoRandomUsers = () =>{
  return axios.get('api/users/twousers');
};

