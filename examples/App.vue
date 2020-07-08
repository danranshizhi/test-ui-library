<template>
  <div id="app">
    <img alt="Vue logo"
         src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <text-ellipsis :contentText="contentText"
                   :outerParentWidth="outerParentWidth" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      contentText: '我是一段测试文字小朋友是否有很多问号不要问我是谁我从哪里来哈哈哈', // 10个字显示...
      outerParentWidth: '20%'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
