import Home from '@/views/home';
import About from '@/views/about';
import News from '@/views/news';
import Vip from '@/views/vip';
import Contract from '@/views/contract';


export default [
    {
        path: 'home',
        name: 'home',
        component: Home
    },
    {
        path: 'about',
        name: 'about',
        component: About
    },
    {
        path: 'news',
        name: 'news',
        component: News
    },
    {
        path: 'vip',
        name: 'vip',
        component: Vip
    },
    {
        path: 'contract',
        name: 'contract',
        component: Contract
    }
];
