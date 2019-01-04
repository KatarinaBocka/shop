import '@babel/polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Routes from './routes'
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter ({
    routes: Routes,
    mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
