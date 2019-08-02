import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import '@/assets/css/theme.css';
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'

Vue.use(Router);
axios.defaults.baseURL = 'https://localhost:5001';
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h=>h(App)
})