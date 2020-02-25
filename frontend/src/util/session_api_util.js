import axios from 'axios';

export const setSessionToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export const register = user => {
    return axios.post('api/users/register', user);
}

export const login = user => {
    return axios.post('api/users/login', user);
}