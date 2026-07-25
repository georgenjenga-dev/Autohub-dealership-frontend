import axios from "axios";

const rawBaseUrl = import.meta.env.VITE_API_BASE_URL;
const defaultBaseUrl = rawBaseUrl
  ? rawBaseUrl
  : typeof window !== "undefined" &&
    ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname)
  ? "http://127.0.0.1:8000/api"
  : "https://autohub-delership-backend.vercel.app/api";

const normalizedBaseUrl = defaultBaseUrl
  .replace(/\/+$/g, "")
  .replace(/\/api$/i, "");
const baseURL = `${normalizedBaseUrl}/api/`;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Retry once against deployed backend if a request fails (helps when local backend is down)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error.config;
    if (!config) return Promise.reject(error);

    // only retry once
    if (config.__isRetry) return Promise.reject(error);

    config.__isRetry = true;

    try {
      // switch to deployed backend and retry
      config.baseURL = "https://autohub-delership-backend.vercel.app/api/";
      return axios(config);
    } catch (err) {
      return Promise.reject(err);
    }
  }
);

export default api;