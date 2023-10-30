import axios from "axios";

export const requestApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
