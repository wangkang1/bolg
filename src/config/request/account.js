/**
 * 用户模块
 * @param {string} name   : 接口中文名
 * @param {string} method : 接口方法
 * @param {string} path   : api路径
 * @param {string} type   : http方法
 */
export default [{
    name: '登录',
    method: 'login',
    path: '/Login/login',
    type: 'post',
},
{
    name: '注册',
    method: 'register',
    path: '/User/register',
    type: 'post',
},

];