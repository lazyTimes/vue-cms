// 入口文件
// console.log('OK')

import Vue from 'vue'

//导入自定义组件
import app from './App.vue'

//导入mint-ui组件
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//导入mui样式
import './lib/mui/css/mui.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
});