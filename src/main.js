
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

import './assets/css/style.css';
import './assets/css/aos.css';
import './assets/css/bootstrap-icons.css';
import './assets/css/bootstrap.min.css';
import './assets/css/glightbox.min.css';

import './assets/js/bootstrap.bundle.min.js';
import './assets/js/glightbox.min.js';
import './assets/js/validate.js';
import './assets/js/main.js';

import VueConfirmDialog from 'vue-confirm-dialog'
Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.config.productionTip = false
Vue.prototype.$http = Axios
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
