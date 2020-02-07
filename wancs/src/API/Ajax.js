import axios from 'axios';
import { URL } from '../Config';
// import Cookie from "js-cookie"

const ajax = {
  baseURL: URL.WANCS_API,
  timeout: 5000,
};

// 로그인 등 인증이 필요없는 페이지에서 사용
export const NoAuthAjax = (function() {
  const NoAuthAjax = axios.create(ajax);

  NoAuthAjax.interceptors.request.use(function(config) {
    config.headers['Accept'] = 'application/json';

    return config;
  });

  return NoAuthAjax;
})();
