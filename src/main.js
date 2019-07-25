import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import Router from 'vue-router'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)

Vue.config.productionTip = false

Vue.component('AlertBox', {
  template: `
    <div>
      <strong>Error!</strong>
    </div>
  `
});

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h=>h(App)
})