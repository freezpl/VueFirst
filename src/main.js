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

import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)
require('froala-editor/js/froala_editor.pkgd.min.js')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

axios.defaults.baseURL = VARS.BASEURL;
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
      this.$store.commit('setAuthState', true);
    }).catch(()=>{
      this.$store.commit('setAuthState', false);
    });    
  },
  el: '#app',
  router,
  store,
  components: { App },
  render: h=>h(App)
})