import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/apps/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
