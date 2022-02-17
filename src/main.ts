import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { AxiosInstance } from "axios";
import API from '@/plugins/axios';

Vue.config.productionTip = false


declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
  }
}

Vue.prototype.$http = API;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')