import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/tailwind.css'
// import vuetify from './plugins/vuetify'
// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

import { Icon } from '@iconify/vue2';

Vue.component('Icon',Icon);
import 'preline'





Vue.config.productionTip = false

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
