import { createApp } from 'vue'
import App from './App.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HeaderTop from './components/HeaderTop.vue'

const routes = [
  { path: '/', component: App },
  { path: '/header', component: HeaderTop }
]

router()
const router = new VueRouter({
routes
})

  createApp(App).mount('#app')

// const routes = [
// { path: '/', component: Home },
// { path: '/articles', component: Articles }
// ];

// const router = new VueRouter({
// routes: routes,
// mode: 'history',
// base: '/'
// });

// const app = new Vue({
// el: '#app',
//   router: router
// })
