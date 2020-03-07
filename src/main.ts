import Vue, { VNode } from 'vue';
// eslint-disable-next-line import/extensions
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(App),
}).$mount('#app');
