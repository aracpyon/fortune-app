import axios from "axios";
import qs from "qs";

export const setSessionToken = token => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const register = user => {
  return axios({
    method: "POST",
    url: "api/users/register",
    data: qs.stringify(user),
    header: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8"
    }
  });
};

export const login = user => {
  return axios.post("api/users/login", user);
};
