/**
 * 启动项配置
 */
import Vue from 'vue';
import { env } from './setting';

/**********************自定义插件*************************/
// string tmpl
import tmpl from '../plugins/string.tmpl';
Vue.use(tmpl);

/**********************第三方插件*************************/
// iview
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

/**********************功能模块配置**********************/
// 拦截器
import './interceptors';

//将api请求封装成方法注册到vue实例中
import './request.config';

// 测试模块
import '../test';