import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import './index.css';
import './wikistyles.css';
import './icons.css';

import 'primevue/resources/themes/arya-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);
app.use(createPinia());
app.use(PrimeVue);
app.use(router);
app.directive('tooltip', Tooltip);
app.mount('#app');
