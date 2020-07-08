import Vue from 'vue'
import App from './App.vue'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 本地测试自己开发的ui组件库
import testUi from '../packages/index'
Vue.use(elementUi)
Vue.use(testUi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
