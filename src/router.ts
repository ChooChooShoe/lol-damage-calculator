import { createRouter, createWebHistory } from 'vue-router';
import WikiRedirect from './WikiRedirect.vue';

const CalcApp = () => import('./CalcApp.vue');
const NotFound = () => import('./NotFound.vue');
const ItemBuilder = () => import('./itembuilder/ItemBuilder.vue');
const DataView = () => import('./dataview/DataView.vue');
const RunesView = () => import('./runes/RunesView.vue');
const TestView = () => import('./wiki/TestView.vue');

import { lastChampPlayer, lastChampTarget } from '@/global/state';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/testview',
      // redirect: `/c/${lastChampPlayer}/vs/${lastChampTarget}`,
    },
    { path: '/c/:player?/vs/:target?', component: CalcApp },
    { path: '/itembuilder', component: ItemBuilder },
    { path: '/runes', component: RunesView },
    { path: '/dataview', component: DataView },
    { path: '/testview', component: TestView },
    {
      path: '/wiki/:pathMatch(.*)*',
      name: 'WikiRedirect',
      beforeEnter(to, _from) {
        // Put the full page URL including the protocol http(s) below
        window.location.replace(
          'https://wiki.leagueoflegends.com/' + to.fullPath,
        );
        return true;
      },
      component: WikiRedirect,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
