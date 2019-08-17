import Router from 'vue-router'
import AuthGuarg from './auth-guard'
//Common
import Home from '../pages/common/Home'
import About from '../pages/common/About'
import ErrComp from '../pages/common/Err'

//admin
import AdminMainPage from '../pages/admin/AdminMainPage'
import AdminHome from '../pages/admin/AdminHome'
import AdminLogin from '../pages/admin/AdminLogin'
import NewArticle from '../pages/admin/NewArticle'

///Tests
import Test from '../pages/test/Test'
import Test1 from '../pages/test/Test1Form'

export default new Router({
  routes: [
    //common
    {
      name:'homePage',
      path: '',
      component: Home,
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
    {
      path: '/admin',
      component: AdminMainPage,
      children: [
        {
          name: 'adminHome',
          path: '',
          component: AdminHome,
          beforeEnter: AuthGuarg,
        },
        {
          name: 'newArticle',
          path: 'new-article',
          component: NewArticle,
          beforeEnter: AuthGuarg,
        },
      ] 
    },
    {
      path: '/administrator',
      component: AdminLogin,
    },

    //tests
    {
      path: '/test',
      component: Test,
      children: [
        {
          path: 'test1',
          component: Test1
        },
      ]
    },
  ],
  mode: 'history'
})