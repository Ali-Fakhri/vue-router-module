import Vue from 'vue';
import VueRotuer from 'vue-router';

Vue.use(VueRotuer);

const router = new VueRotuer({
    routes: [
        {
            path: '/', component: () => import('./views/HomePage.vue'), beforeEnter: (to, from, next) => {
                console.log('before entering Home Page');
                next();
            },
        },
        {
            path: '/user', component: () => import('./views/UserPage.vue'), children: [
                { path: '', component: () => import('./components/UserStart.vue') },
                { path: ':id', component: () => import('./components/UserDetails.vue') },
                { path: ':id/edit', component: () => import('./components/UserEdit.vue') },
            ]
        },
        { path: '/redirect', redirect: '/' },
        { path: '*', component: () => import('./views/NotFound.vue') }
    ],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    console.log('Logged From Global Before Each');
    next();
});

export default router;
