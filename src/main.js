import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import axios from "axios"
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Search } from 'vant';
Vue.prototype.$http=axios
// axios.defaults.baseURL="http://127.0.0.1:8080/"
Vue.use(Search);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
