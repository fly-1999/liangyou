import base from "../base"; // 导入接口域名列表
import axios from "../http"; // 导入http中创建的axios实例
import qs from "qs"; // 根据需求是否导入qs模块

const login = {
  //
  getRoles(params) {
    return axios.get(`${base.sq}/login/user/roles`, params);
  },
  // 登录
  login(params) {
    return axios.post(`${base.sq}/login`, qs.stringify(params));
  },
  //可能是下拉
  roles(params) {
    return axios.get(`${base.sq}//login/user/roles`, params);
  },
};
export default login;
