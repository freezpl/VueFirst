import Vue from 'vue'
import App from './App'
import store from './store'
import Router from 'vue-router'
import router from './router'
import '@/assets/css/theme.css';
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VARS from './helper/vars'
Vue.use(Router);


axios.defaults.baseURL = VARS.BASEURL;
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h=>h(App)
})