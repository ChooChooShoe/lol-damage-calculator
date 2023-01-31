import { createApp } from 'vue'
import * as VueRouter from 'vue-router';
// import Root from './Root.vue'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import WikiRedirect from './WikiRedirect.vue';
const CalcApp = () => import('./CalcApp.vue');
const NotFound = () => import('./NotFound.vue');
const ItemBuilder = () => import("./itembuilder/ItemBuilder.vue");
const DataView = () => import("./dataview/DataView.vue");
const RunesView = () => import("./runes/RunesView.vue");
import './index.css'
import './wikistyles.css'
import './icons.css'

import 'primevue/resources/themes/arya-blue/theme.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Tooltip from 'primevue/tooltip';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/', redirect: `/c/${localStorage.getItem('sv_champ_player')}/vs/${localStorage.getItem('sv_champ_target')}` },
    { path: '/c/:player?/vs/:target?', component: CalcApp },
    { path: '/itembuilder', component: ItemBuilder },
    { path: '/runes', component: RunesView },
    { path: '/dataview', component: DataView },
    {
      path: '/wiki/:pathMatch(.*)*', name: 'WikiRedirect',
      beforeEnter(to, from) {
        // Put the full page URL including the protocol http(s) below
        window.location.replace("https://leagueoflegends.fandom.com" + to.fullPath)
        return true;
      },
      component: WikiRedirect
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

const app = createApp(App);
app.config.unwrapInjectedRef = true
app.use(PrimeVue);
app.use(router);
app.directive('tooltip', Tooltip);
app.mount('#app');