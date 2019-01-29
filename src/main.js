// 入口文件
// console.log('OK')

import Vue from 'vue'
//路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//导入自定义组件
import app from './App.vue'

//导入mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//导入自己的路由模块
import router from './router'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    //挂载到实例
    router

});