import firebase from 'firebase'

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Deposit from './views/Deposit.vue'
import Transfer from './views/Transfer.vue'
import Pay from './views/Pay.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/signin'
    },
    {
      path: '/',
      redirect: '/signin'
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: Deposit
    },
    {
      path: '/transfer',
      name: 'transfer',
      component: Transfer
    },
    {
      path: '/pay',
      name: 'pay',
      component: Pay
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('/signin')
  else next()
})

export default router
