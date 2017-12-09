import Vue from 'vue'
import Router from 'vue-router'
import GeneralComponent from '@/components/GeneralComponent'
import AboutComponent from '@/components/AboutComponent'
import MapComponent from '@/components/MapComponent'

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
    },
    {
      path: '/map',
      name: 'MapComponent',
      component: MapComponent,
      props: true
    }
  ]
})
