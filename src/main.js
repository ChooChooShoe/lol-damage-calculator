import { createApp } from 'vue'
// import Root from './Root.vue'
const App = () => import('./App.vue');
const ItemBuilder = () => import("./itembuilder/ItemBuilder.vue");
import './index.css'
import './wikistyles.css'
import './icons.css'

let app = null;
let itembuilder = null;

function updatePath(newPath) {
    if (newPath.slice(1).startsWith('/itembuilder')) {
        if (app) app.unmount();
        if (!itembuilder) ItemBuilder().then(res => {
            console.log("Dynamic Loaded (ItemBuilder)");
            itembuilder = createApp(res.default);
            itembuilder.mount("#app");
        });
        else itembuilder.mount('#app');
    } else {
        if (itembuilder) itembuilder.unmount();
        if (!app) App().then(res => {
            console.log("Dynamic Loaded (App)");
            app = createApp(res.default);
            app.mount("#app");
        });
        else app.mount("#app");
    }
}z
window.addEventListener('hashchange', () => {
    updatePath(window.location.hash);
})
updatePath(window.location.hash);