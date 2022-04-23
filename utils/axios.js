import axios from "axios";
import { AXIOS_DEFAULT_CONFIG } from '@/config/index'; 
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '@/config/interceptors/axios';

let axiosInstance = {};
axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);

// inject request
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc);
// inject response
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

export default axiosInstance;
