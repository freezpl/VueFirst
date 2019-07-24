import Router from 'vue-router'

import Home from '../pages/common/Home'
import About from '../pages/common/About'
//import NotFound from '../pages/common/NotFound'

export default new Router({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    // {
    //   path: '*',
    //   component: NotFound
    // },
  ],
  mode: 'history'
})