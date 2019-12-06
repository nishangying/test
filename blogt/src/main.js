// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入公用css
import './sty/style.css'
import './sty/common.scss'
// 引入公用JS
import './service/flexible.js'


// // 引入axios
import axios from 'axios';
Vue.prototype.$axios = axios;


// // 引入全部组件
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);

// // 按需引入组件
import {Spinner} from 'mint-ui';
Vue.component(Spinner.name,Spinner)

import {Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { Button } from 'mint-ui';
Vue.component(Button.name, Button);


// 全局注册组件
import Components from './components'
Object.keys(Components).forEach(compName => {
  Vue.component(compName, Components[compName]);
});

//全局注册过滤器
import  * as  filters from '../src/service/filters'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// setview
import './service/setview'

// 引入vuex
import store from './store'


// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

new Vue({
  el: '#app',
  router,
  store,  //使用store
  components: { App },
  template: '<App/>'
})
