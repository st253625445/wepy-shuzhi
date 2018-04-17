
// 域名
// var host = 'http://127.0.0.1:3000';
var host = 'https://www.easy-mock.com/mock/5ad45eb54cb9e77e30399f22/example';

// 下面的地址配合云端 Demo 工作
export const service = {
  // 列表接口 GET
    list: `${host}/list`,

  // 筛选页接口 GET
    tags: `${host}/tags`,

};

export default {
    service
};
