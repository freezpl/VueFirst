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
//let token = localStorage.getItem('token');
//axios.defaults.headers.common['Authorization'] = "Bearer " + token;
//axios.defaults.headers.common['Content-Type'] = "application/json";
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  created() {
    this.$http.get('auth/getlogin', {
      headers: {
         Authorization: 'Bearer ' + localStorage.getItem('token'),
      }
   }).then(resp => {
      console.log(resp.data);
    });
    console.log(localStorage.getItem('token'));
  },
  el: '#app',
  router,
  store,
  components: { App },
  render: h=>h(App)
})