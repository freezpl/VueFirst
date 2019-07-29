import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import router from './router'
import '@/assets/css/theme.css';
import './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h=>h(App)
})