/**
 * 开发环境 or 生产环境
 */
export const env = require('./env').default; // developent or production

/**
 * global setting
 */
export const gbs = {
    // webApi接口的主机地址 
    apiHost: 'http://192.168.0.120:8345/api',
    // 本地存储的key 
    db_prefix: 'smart-'
};