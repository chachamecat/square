// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import App from './App'
import Router from './router'
import VueRouter from 'vue-router'
import Page1 from './components/page1'
import Page2 from './components/page2'
Vue.use(VueRouter)
const routes2 = [
  { path: '/page1', component: Page1 },
  { path: '/page2', component: Page2 }
]
const router = new VueRouter({
  routes2
})
const routerOptions = [
  {
    path: '/signup',
    component: 'SignUp'
  },
  {
    path: '/signin',
    component: 'SignIn'
  }
]
export default new Router({
  mode: 'history',
  routes2
})
const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`)
  }
})
Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  routes,
  routes2,
  router,
  components: { App },
  template: '<App/>'
})
