import Vue from 'vue'
import Mint from 'mint-ui';
import Element from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
import 'src/style/index.scss';

import App from './App';
import store from './store';
import router from './router';
import LazyLoad from './common/utils/lazyload'

Vue.use(LazyLoad)
Vue.use(Mint)
Vue.use(Element)
Vue.use(VueResource)

var app = new Vue({
  el: '#app',
  router,
  store,
  ...App,
});
