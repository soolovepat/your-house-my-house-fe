import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

const api = instance;

export default api;
