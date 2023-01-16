import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'

import Homepage from './components/pages/homepage.vue'
import AboutPage from './components/pages/about_page.vue'




const routes = [
  { path: "/", component: Homepage, name:"myHomepage" },
  { path: "/about_page", component: AboutPage, name:"myAboutPage" },
];


const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

