import axios from "axios";

const api = axios.create({
  baseURL: "https://autohub-delership-backend.vercel.app/api/",
});

export default api;