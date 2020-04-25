import Vue, { VNode } from 'vue';
// eslint-disable-next-line import/extensions
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h): VNode => h(App),
}).$mount('#app');
