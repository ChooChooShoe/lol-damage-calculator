import * as Vue from 'vue/dist/vue.esm-bundler'
import * as VueRouter from 'vue-router';
// import Root from './Root.vue'
import App from './App.vue';
import CalcApp from './CalcApp.vue';
const ItemBuilder = () => import("./itembuilder/ItemBuilder.vue");
import './index.css'
import './wikistyles.css'
import './icons.css'

const NotFound = { template: '<div>404 Not Found: {{ $route.path }}</div><router-link to="/">Go to Home</router-link>' }

const routes = [
  { path: '/', redirect: `/c/${localStorage.getItem('sv_champ_player')}/vs/${localStorage.getItem('sv_champ_target')}` },
  { path: '/c/:player?/vs/:target?', component: CalcApp },
  { path: '/itembuilder', component: ItemBuilder },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = Vue.createApp(App)
app.config.unwrapInjectedRef = true
app.use(router)
app.mount('#app')