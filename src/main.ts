import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

import './index.css';
import './wikistyles.css';
import './icons.css';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(router);
app.directive('tooltip', Tooltip);
app.mount('#app');
