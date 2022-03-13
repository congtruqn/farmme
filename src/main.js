
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import './assets/css/style.css';
import './assets/css/default.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.min.css';
import './assets/css/slick.css';
import './assets/css/magnific-popup.css';
import './assets/css/bootstrap.min.css';

var Paginate = require('vuejs-paginate')
Vue.component('paginate', Paginate)
import VueConfirmDialog from 'vue-confirm-dialog'
import store from '@/store';
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.config.productionTip = false
Vue.prototype.$http = Axios
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
