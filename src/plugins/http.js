import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// 导入封装的回调函数
import { gbs } from '../config/setting.js';

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.apiHost;

/**
 * 封装axios的通用请求
 * @param  {string}   type      get, post, put, delete, patch
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * ****以下为额外参数，可以为空******************
 * @param  {object}   param     url中的参数数据
 * @param  {string}   token
 * @param  {string}   host      主机地址
 * @param  {object}   headers
 * @param  {object}   axios_opts axios内置属性
 * @param  {function} errFn     错误处理函数
 */
let http = (type, url, data, fn, {
    param = {},
    token,
    host,
    headers,
    axios_opts,
    errFn
} = {}) => {

    //解析url,允许在url中使用变量
    try {
        url = url.tmpl(param);
    } catch (ex) {
        if (ex instanceof RangeError) {
            throw `url解析失败, ${ex.message}`;
        }
        throw ex;
    }

    var options = {
        method: type,
        url: host && typeof host === 'string' ? host + url : url,
        headers: headers && typeof headers === 'object' ? headers : {},
        timeout: 5000,
    };

    options[type === 'get' ? 'params' : 'data'] = data;

    if (token) {
        //如果你们的后台不会接受headers里面的参数，打开这个注释，即实现token通过普通参数方式传
        // data.token = token;

        options.headers.token = token;
    }

    //axios内置属性均可写在这里
    if (axios_opts && typeof axios_opts === 'object') {
        for (var f in axios_opts) {
            options[f] = axios_opts[f];
        }
    }

    //发送请求
    Vue.axios(options).then((res) => {
        fn(res.data);
    }).catch((err) => {
        errFn && errFn(err);
    });
};

export default {
    install: function(Vue, options) {
        Vue.prototype.$$http = http;
    }
}