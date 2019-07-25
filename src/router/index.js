import Router from 'vue-router'

import Home from '../pages/common/Home'
import About from '../pages/common/About'
import ErrComp from '../pages/common/Err'

export default new Router({
  routes: [
    {
      name:'homePage',
      path: '',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      name: 'errPage',
      path: '/err',
      component: ErrComp
    },
    {
      path: '*',
      redirect: {
        name: 'errPage'
      }
    },
  ],
  mode: 'history'
})