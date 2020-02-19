import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import SingleContractType from '@/components/SingleContractType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contract-type/:id',
      name: 'SingleContractType',
      component: SingleContractType,
      props: true
    }
  ]
})
