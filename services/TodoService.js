import axios from "axios";

export const fetchTodosFromAPI = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};
