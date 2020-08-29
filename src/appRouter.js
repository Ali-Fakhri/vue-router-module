import Vue from 'vue';
import VueRotuer from 'vue-router';

import HomePage from './views/HomePage.vue';
import UserPage from './views/UserPage.vue';
import UserStart from './components/UserStart.vue';
import UserDetails from './components/UserDetails.vue';
import UserEdit from './components/UserEdit.vue';
import NotFound from './views/NotFound.vue';

Vue.use(VueRotuer);

const router = new VueRotuer({
    routes: [
        {
            path: '/', component: HomePage, beforeEnter: (to, from, next) => {
                console.log('before entering Home Page');
                next();
            },
        },
        {
            path: '/user', component: UserPage, children: [
                { path: '', component: UserStart },
                { path: ':id', component: UserDetails },
                { path: ':id/edit', component: UserEdit },
            ]
        },
        { path: '/redirect', redirect: '/' },
        { path: '*', component: NotFound }
    ],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('Logged From Global Before Each');
    next();
});

export default router;
