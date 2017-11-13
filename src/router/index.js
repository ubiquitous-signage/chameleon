import Vue from 'vue'
import Router from 'vue-router'
import GeneralComponent from '@/components/GeneralComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeneralComponent',
      component: GeneralComponent
    }
  ]
})
