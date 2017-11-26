import Vue from 'vue'
import Router from 'vue-router'
import GeneralComponent from '@/components/GeneralComponent'
import WordCloudComponent from '@/components/WordCloudComponent'

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
      path: '/wordcloud',
      name: 'WordCloudComponent',
      component: WordCloudComponent,
      props: true
    }
  ]
})
