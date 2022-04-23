// import axiosInstance from "@/utils/axios";
// import httpRequest from '@/service/http';

class ResponseError extends Error {
  constructor(msg = 'Something went wrong.', code = '000001', data) {
    super();

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ResponseError);
    }
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
}

export function requestSuccessFunc(requestObj) {
  requestObj.headers.Authorization = sessionStorage.getItem('token');
  return requestObj;
}

export function requestFailFunc(requestError) {
  return Promise.reject(requestError);
}

export function responseSuccessFunc(responseObj) {
  // if (Object.prototype.toString.call(responseObj.data) !== '[object Object]') {
  //   return (responseObj && responseObj.data) || {};
  // }
  // const code = responseObj.data.code;
  // const msg = responseObj.data.msg;
  // if (responseObj.data && code && code !== 200) {
  //   return Promise.reject(new ResponseError(msg, code));
  // }
  return (responseObj && responseObj.data) || {};
}

export function responseFailFunc(responseError) {
  if (!responseError.response) {
    return Promise.reject(new ResponseError('Something went wrong.'));
  }
  // const { status, data } = responseError.response;
  // if (status === 401) {
    
  // }
  const {  data } = responseError.response;
  let error = new ResponseError('Something went wrong.');
  if (data) {
    const { code, msg, data: _data } = data;
    error = new ResponseError(msg, code, _data);
  }
  return Promise.reject(error);
}