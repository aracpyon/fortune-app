import axios from "axios";

export const fetchUsers = () => {
  return axios({
    method: "GET",
    url: "/api/users"
  });
};

