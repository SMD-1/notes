import axios from "axios";

// const baseURL = "http://localhost:4001";
const baseURL = "https://notes.skdan.site";
const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
