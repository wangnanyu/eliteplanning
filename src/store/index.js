import Vue from 'vue';
import Vuex from 'vuex';
import Login from './module/login';

Vue.use(Vuex);

const modules = {
    ...Login
};

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    ...modules,
    strict: debug
});
