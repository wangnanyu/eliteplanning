import { LOGIN_SUCCESS, GOT_MENU, SET_ROUTEMAP, LOGOUT_SUCCESS, TOGGLE_SIDEBAR } from '../mutation-types';

const state = {
    userInfo: {
        userName: '',
        operates: []

    },
    menus: [],
    routeMap: {},
    sidebarActive: true
};

const getters = {
};


const actions = {
};

const mutations = {
    [LOGIN_SUCCESS](state, result) {
        if (result && result.data) {
            state.userInfo = result.data;
        }
    },
    [GOT_MENU](state, result) {
        if(result && result.data) {
            state.menus = result.data;
        }
    },
    [SET_ROUTEMAP](state, result) {
        state.routeMap = result;
    },
    [LOGOUT_SUCCESS](state) {
        state.userInfo = {};
    },
    [TOGGLE_SIDEBAR](state) {
        state.sidebarActive = !state.sidebarActive;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
