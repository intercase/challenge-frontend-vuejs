import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-loading-overlay/dist/vue-loading.css';
Vue.config.productionTip = false

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
