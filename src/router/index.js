import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../pages/index.vue'], resolve)
    },
    {
      path: '/register',
      name: 'login',
      component: resolve => require(['../pages/login.vue'], resolve)
    }
  ]
})
