import axios from "axios";

let axiosInstance = axios.create({
  baseURL:'/zjApp'
});

axiosInstance.defaults.timeout = 60000;

axiosInstance.defaults.headers["Content-Type"] =
  "application/json;charset=utf-8";

let messageInst = null;

let showErrorMessage = (msg) => {
  console.error(msg);
};

// 请求拦截器
axiosInstance.interceptors.request.use((request) => {
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return [null, response.data];
  },
  (error) => {
    showErrorMessage(error);
    return [error, null];
  }
);

export default axiosInstance;
