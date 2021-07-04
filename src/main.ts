import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { auth } from './firebase'
import { AxiosInstance } from "axios";
import API from '@/plugins/axios';

Vue.config.productionTip = false

let app: Vue;

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
  }
}

Vue.prototype.$http = API;

auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})

