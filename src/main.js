import Vue from 'vue';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import './registerServiceWorker';
import 'materialize-css/dist/js/materialize.min';
import router from './router';

import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');