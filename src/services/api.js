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

export default api;