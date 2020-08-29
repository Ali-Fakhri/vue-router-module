import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';

import router from './appRouter';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
