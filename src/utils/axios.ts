import axios from "axios";
import packageJSON from "../../package.json";

const axiosClient = axios.create({
  baseURL: "https://omeda.city",
  headers: {
    "Content-Type": "application/json",
    "x-omedacity-js-version": packageJSON.version,
  },
});

export default axiosClient;
