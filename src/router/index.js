import Vue from 'vue';
import Router from 'vue-router';

import EliteRouter from './elite';

import Header from '../components/layout/top.header';
import Body from '../components/layout/body';
import Unauthorized from '../components/error/401';
import NotFound from '../components/error/404';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            redirect: { name: 'app' }
        },
        {
            path: '/',
            redirect: { name: 'app' }
        },
        {
            path: '/app',
            name: 'app',
            redirect: { name: 'home' },
            components: {
                header: Header,
                body: Body
            },
            children: [
                ...EliteRouter
            ]
        },
        {
            path: '/unauthorized',
            name: 'unauthorized',
            component: Unauthorized,
            meta: {
                single: true
            }
        },
        {
            path: '*',
            name: '404',
            component: NotFound,
            meta: {
                single: true
            }
        }]
});

export default router;