import Vue from 'vue'
import Router from 'vue-router'
import GeneralComponent from '@/components/GeneralComponent'
import AboutComponent from '@/components/AboutComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeneralComponent',
      component: GeneralComponent,
      props: true
    },
    {
      path: '/about',
      name: 'AboutComponent',
      component: AboutComponent,
      props: true
    }
  ]
})
