import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import shopcart from '../components/shopcart/shopcart.vue'
import allproducts from '../components/allproducts/allproducts.vue'
import center from '../components/center/center.vue'
import stroll from '../components/stroll/stroll.vue'
import newproducts from '../components/newproducts/newproducts.vue'
import homepage from '../components/homepage/homepage.vue'
import settings from '../components/settings/settings.vue'
import login from '../components/login/login.vue'
import register from '../components/register/register.vue'
import housework from '../components/housework/housework.vue'
import productdetail from '../components/productdetail/productdetail.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path:'/',
      // component:home,
      redirect:'home'
    },
    {
      path: '/home',
      component: home,
      children:[
        {
          path:'',
          component:homepage
        },
        {
          path: 'homepage',
          component: homepage
        },
        {
          path: 'newproducts',
          component: newproducts
        },
        {
          path:'housework',
          component:housework
        }
      ]
    },
    {
      path: '/shopcart',
      component: shopcart
    },
    {
      path: '/allproducts',
      component: allproducts
    },
    {
      path: '/center',
      component: center
    },
    {
      path: '/stroll',
      component: stroll
    },
    {
      path: '/settings',
      component: settings
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/productdetail/:id',
      component:productdetail
    }

  ]
})
