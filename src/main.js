// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import Box from './components/Shared/Box'
import Alert from './components/Shared/Alert'
import Table from './components/Shared/Table'

Vue.config.productionTip = false

Vue.component('v-box', Box)
Vue.component('v-alert', Alert)
Vue.component('v-table', Table)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})