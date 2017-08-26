/**
 * 导出所有模块
 * @param {string} module : 模块名
 * @param {string} name   : 中文名
 * @param {object} list   : 所有的接口
 */
export default [{
    module: 'account',
    name: '账户管理',
    list: require('./account.js').default
}];