import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'components/common/toast/index'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'


Vue.prototype.$bus = new Vue()

Vue.use(Toast);

//解决移动端300ms延迟
FastClick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
