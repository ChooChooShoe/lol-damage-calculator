import { createRouter, createWebHistory } from 'vue-router';
import WikiRedirect from './WikiRedirect.vue';

const CalcApp = () => import('./CalcApp.vue');
const NotFound = () => import('./NotFound.vue');
const ItemBuilder = () => import('./itembuilder/ItemBuilder.vue');
const DataView = () => import('./dataview/DataView.vue');
const RunesView = () => import('./runes/RunesView.vue');
const TestView = () => import('./wiki/TestView.vue');

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: `/c/${localStorage.getItem(
        'sv_champ_player'
      )}/vs/${localStorage.getItem('sv_champ_target')}`,
    },
    { path: '/c/:player?/vs/:target?', component: CalcApp },
    { path: '/itembuilder', component: ItemBuilder },
    { path: '/runes', component: RunesView },
    { path: '/dataview', component: DataView },
    { path: '/testview', component: TestView },
    {
      path: '/wiki/:pathMatch(.*)*',
      name: 'WikiRedirect',
      beforeEnter(to, from) {
        // Put the full page URL including the protocol http(s) below
        window.location.replace(
          'https://leagueoflegends.fandom.com' + to.fullPath
        );
        return true;
      },
      component: WikiRedirect,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
