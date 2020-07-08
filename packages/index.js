// 将所有的组件进行导出
// 导入组件
import textEllipsis from './textEllipsis'

// 组件列表

const components = [
  textEllipsis
]

// 定义install方法

const install = (Vue, opts = {}) => {
  // 将所有的 组件 挂载到全局资源
  components.map(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件
if (typeof window != undefined && window.Vue) {
  install(window.Vue)
}
export default {
  version: '0.1.0',
  // 必须具有install方法，否则无法通过Vue.use的方式进行使用
  install,
  // 组件列表
  textEllipsis
}