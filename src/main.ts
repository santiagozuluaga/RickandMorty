import Vue from 'vue'
import App from './App.vue'
import router from './router'

if (process.env.VUE_APP_MODE  != "production") {
  Vue.config.productionTip = true
}
else {
  Vue.config.productionTip = false
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
