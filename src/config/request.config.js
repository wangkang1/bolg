import Vue from 'vue';
import request from './request';

// axois 的封装
import http from '../plugins/http';
Vue.use(http);

// 功能注册插件
import register from '../plugins/register';
Vue.use(register);

registerToVue();

function registerToVue() {

    var api_methods = {};

    for (var i = 0; i < request.length; i++) {
        if (typeof request[i] === 'object' && request[i].list && Array.isArray(request[i].list)) {
            for (var j = 0; j < request[i].list.length; j++) {
                api_methods['api_' + request[i].module + '_' + request[i].list[j].method] = (function(n, m) {
                    return function(data, fn, opts) {
                        this.$$http(request[n].list[m].type, request[n].list[m].path, data, fn, opts);
                    };
                })(i, j);
            }
        }
    }

    // 注册到vue
    Vue.$$register(api_methods);
}