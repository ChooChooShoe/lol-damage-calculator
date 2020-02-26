import Vue from 'vue'
import App from './App.vue'
import Notifications from 'vue-notification'
import './basicstyle.scss';

Vue.use(Notifications)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
