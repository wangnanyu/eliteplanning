import Vue from 'vue'
import Element from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss';

import App from './App';
import store from './store';
import router from './router';
import LazyLoad from './common/directives/lazyload'

Vue.use(LazyLoad)
Vue.use(Element)
Vue.use(VueResource)

var app = new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
