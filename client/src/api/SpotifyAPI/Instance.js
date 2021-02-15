import axios from "axios";

const instanceAuth = axios.create({
  baseURL: "https://api.spotify.com",
  timeout: 2000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instanceAuth;
