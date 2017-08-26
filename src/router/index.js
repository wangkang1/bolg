import Vue from 'vue';
import VueRouter from 'vue-router';
import Routers from './routers';

Vue.use(VueRouter);


const RouterConfig = {
    // mode: 'history',
    routes: Routers
};

export const router = new VueRouter(RouterConfig);