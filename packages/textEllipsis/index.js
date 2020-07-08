import textEllipsis from './src/textEllipsis'

textEllipsis.install = function (Vue) {
  Vue.component(textEllipsis.name, contentText, outerParentWidth, outerParentPadding)
}

export default textEllipsis