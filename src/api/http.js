/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import bs from './base';
import qs from 'qs';
import store from '../store/index';
import router from '../router';

// axios.defaults.withCredentials = true;
/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    case 401:
      store.dispatch('setToken', '');
      let url = router.currentRoute.name;
      if (url == 'login') {
        router.push({
          path: '/login'
        });
      } else {
        router.push({
          path: '/login',
          query: {
            url: url
          }
        });
      }
      break;
    // 401: 未登录状态，跳转登录页
    case 302:
      // toLogin();
      break;
    // 403 token过期
    // 清除token并跳转登录页
  }
};

// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 60
});
// instance.defaults.withCredentials=true
// 设置post请求头
instance.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8';
/**
 * 请求拦截器
 * 每次请求前，如果存在token则在请求头中携带token
 */
instance.interceptors.request.use(
  config => {
    //NProgress.start();
    const token = store.state.token;
    if (token) {
      config.headers['Authorization'] = token;
    }
    token && (config.headers['Authorization'] = token);
    if(config.url.indexOf('?')>0) {
      config.url = config.url + '&times=' + new Date().getTime();
    } else {
      config.url = config.url + '?times=' + new Date().getTime();
    }
    return config;
  },
  error => {
    return Promise.error(error);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  res => {
    //NProgress.done();
    if (res.status === 200) {
      if (res.data.code == 200 || res.data.code == 10405) {
        return Promise.resolve(res.data);
      } else {
        errorHandle(res.data.code);
        return Promise.resolve(res.data);
      }
    } else {
      return Promise.reject(res.data);
    }
  },
  // 请求失败
  error => {
    // NProgress.done();
    const {
      response
    } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    }
  }
);

export default instance;

/**
 * axios返回状态码备份
 *
 * 200: 成功
 */
