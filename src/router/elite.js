import Home from '@/views/major/home';
import About from '@/views/major/about';
import News from '@/views/major/news';
import Vip from '@/views/major/vip';
import Contract from '@/views/major/contract';
import Application from '@/views/feature/application';
import Experience from '@/views/feature/experience';
import Counseling from '@/views/feature/counseling';
import Traveling from '@/views/feature/traveling';
import Immigration from '@/views/feature/immigration';

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
    },
    {
        path: 'application',
        name: 'application',
        component: Application
    },
    {
        path: 'experience',
        name: 'experience',
        component: Experience
    },
    {
        path: 'counseling',
        name: 'counseling',
        component: Counseling
    },
    {
        path: 'traveling',
        name: 'traveling',
        component: Traveling
    },
    {
        path: 'immigration',
        name: 'immigration',
        component: Immigration
    }
];
