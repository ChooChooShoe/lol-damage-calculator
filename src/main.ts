import * as Vue from 'vue'
import * as VueRouter from 'vue-router';
// import Root from './Root.vue'
import App from './App.vue';
const CalcApp = () => import('./CalcApp.vue');
const NotFound = () => import('./NotFound.vue');
const ItemBuilder = () => import("./itembuilder/ItemBuilder.vue");
const DataView = () => import("./dataview/DataView.vue");
import './index.css'
import './wikistyles.css'
import './icons.css'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: '/', redirect: `/c/${localStorage.getItem('sv_champ_player')}/vs/${localStorage.getItem('sv_champ_target')}` },
    { path: '/c/:player?/vs/:target?', component: CalcApp },
    { path: '/itembuilder', component: ItemBuilder },
    { path: '/dataview', component: DataView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

const app = Vue.createApp(App)
app.config.unwrapInjectedRef = true
app.use(router)
app.mount('#app')