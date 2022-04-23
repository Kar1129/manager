import Axios from '@/utils/axios';
import APIConfig from '@/service/api/index';

// const isArrayBuffer = function (obj) {
//   return Object.prototype.toString.call(obj) === '[object ArrayBuffer]'
// }

const request = function (name, config) {
  const api = APIConfig[name];
  if (!api) {
    throw new Error('The api is not exist.');
  }

  // init config
  let params = {};
  let urlParams = {};
  let options = {};
  if (config) {
    params = config.params || {};
    urlParams = config.urlParams || {};
    options = config.options || {};
  }

  // url
  urlParams = api.urlParams ? { ...api.urlParams, ...urlParams } : urlParams;
  const url = typeof api.path === 'function' ? api.path(urlParams) : api.path;

  // method
  const method = api.method;

  // options
  options = api.options ? { ...api.options, ...options } : options;

  // request config
  const requestOpt = {
    method,
    url,
    ...options
  }

  // params
  // 正常的 JSON Object 对象
  if (Object.prototype.toString.call(params) === '[object Object]') {
    params = api.params ? { ...api.params, ...params } : params;
    if (Object.keys(params).length) {
      if (method.toLocaleLowerCase() === 'get') {
        requestOpt.params = params;
      } else {
        requestOpt.data = params;
      }
      // else {
      //   // protobuf format
      //   requestOpt.data = (api.isProtobuf && api.protoMessageType) ? encodeObjectToProtobuf(protoRoot, params, api.protoMessageType) : params;
      // }
    }
  } else {
    // 一些字节流
    requestOpt.data = params;
  }

  // The bug of Axios. `data` must not be empty when you want to override the `Content-Type`.
  if (requestOpt.headers && requestOpt.headers['Content-Type']) {
    if (typeof requestOpt.data === 'undefined') {
      requestOpt.data = {};
    }
  }

  // send request by axios
  // const responseFilter = FilterConfig[name];
  // if (!responseFilter) {
  //   return Axios(requestOpt)
  // }
  return Axios(requestOpt).then(res => {
    // if (res.data) {
    //   res.data = responseFilter(res.data)
    // }
    return Promise.resolve(res)
  }).catch(err => {
    return Promise.reject(err)
  });
}

export default request;
