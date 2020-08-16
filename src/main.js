import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './basicstyle.scss';

Vue.use(Notifications)
Vue.config.productionTip = false

// Vue.component('SettingsModel', () => import('./components/SettingsModel.vue'));

Vue.component('ShopModel', () => import('./components/shop/ShopModel.vue'));

new Vue({
  render: h => h(App)
}).$mount('#app')
