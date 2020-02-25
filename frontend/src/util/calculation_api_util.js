import axios from 'axios';

export const getCalculations = () => {
  return axios.get('api/calculations')
};

export const createCalculation = data => {
  return axios.post('api/calculations/', data)
};