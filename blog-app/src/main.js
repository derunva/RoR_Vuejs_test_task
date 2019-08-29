import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false
import ActionCableVue from 'actioncable-vue';

Vue.use(ActionCableVue, {
    debug: true,
    debugLevel: 'error',
    connectionUrl: 'ws://localhost:3000/cable',
    connectImmediately: true
});
require("./assets/main.sass")

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
