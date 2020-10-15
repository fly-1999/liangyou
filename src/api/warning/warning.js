import base from "../base"; // 导入接口域名列表
import axios from "../http"; // 导入http中创建的axios实例

const warning = {
    getPredictionModel() {
        return axios.get(`${base.sq}/alarm/model/prediction`);
    },
    getSupplyChainModel() {
        return axios.get(`${base.sq}/alarm/model/supplychain`);
    },
    getList() {
        return axios.get(`${base.sq}/basement/info`);
    },

};
export default warning
