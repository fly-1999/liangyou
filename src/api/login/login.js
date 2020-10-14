import base from "../base"; // 导入接口域名列表
import axios from "../http"; // 导入http中创建的axios实例


const login = {
  // 登录
  getRoles(params) {
    return axios.get(`${base.sq}/login/user/roles`, params);
  },
};
export default login;
