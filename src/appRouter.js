import Vue from 'vue';
import VueRotuer from 'vue-router';

import HomePage from './views/HomePage.vue';
import UserPage from './views/UserPage.vue';
import UserStart from './components/UserStart.vue';
import UserDetails from './components/UserDetails.vue';
import UserEdit from './components/UserEdit.vue';

Vue.use(VueRotuer);

const router = new VueRotuer({
    routes: [
        { path: '/', component: HomePage },
        {
            path: '/user', component: UserPage, children: [
                { path: '', component: UserStart },
                { path: ':id', component: UserDetails },
                { path: ':id/edit', component: UserEdit },
            ]
        }
    ],
    mode: 'history'
});

export default router;
