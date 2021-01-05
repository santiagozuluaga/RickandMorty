import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if (process.env.VUE_APP_MODE  != "production") {
  Vue.config.productionTip = true
}
else {
  Vue.config.productionTip = false
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
