<template>
  <div :ref="refName"
       :style="{width: width}">
    <div class="contentCls"
         :style="{ padding: padding, height: '25px', lineHeight: '25px' }">
      <el-tooltip class="item"
                  effect="dark"
                  :disabled="isElTooltipShow"
                  :content="contentText"
                  :placement="placement">
        <span @mouseenter="hanldeElTooltip"
              class="fs14">
          {{ contentText }}
        </span>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textEllipsis',
  props: {
    outerParentWidth: {
      // 外层的宽度
      type: String,
      default: '100%',
    },
    contentText: {
      // 文本内容
      type: String,
      default: '',
    },
    outerParentPadding: {
      type: String,
      default: '0 0'
    },
    placement: {
      type: String,
      default: 'bottom'
    },
    refName: {
      type: String,
      default: 'ellipsisContainer'
    }
  },
  computed: {
    width () {
      // 外层宽度自动填充px
      return this.outerParentWidth
    },
    padding () {
      return this.outerParentPadding
    }
  },
  data () {
    return {
      isElTooltipShow: true // Tooltip 是否可用, 默认不可用
    }
  },
  methods: {
    hanldeElTooltip (val) {
      let outerParentWidth = null;
      if (this.outerParentWidth.indexOf('px') > -1 && this.outerParentWidth.indexOf('%') == -1) { // 固定宽度
        outerParentWidth = Number(this.outerParentWidth.split('px')[0]);
      } else {// 如果为百分比，直接获取外层的实际宽度
        outerParentWidth = this.$refs[this.refName].clientWidth;
      }
      if (outerParentWidth && val.target.offsetWidth > outerParentWidth) {
        // 作比较：文本实际的宽度与外层的宽度
        this.isElTooltipShow = false
      }
    },
  },
}
</script>
<style scoped>
.contentCls {
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
</style>