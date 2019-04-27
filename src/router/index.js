import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Void from '@/components/Void'
import Test from '@/components/Test'
import Begin from '@/components/Begin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/void', name: 'Void', component: Void},
    {path: '/test', name: 'Test', component: Test},
    {path: '/where-to-begin', name: 'Begin', component: Begin},
    {path: '*', redirect: '/void'}
  ]
})
