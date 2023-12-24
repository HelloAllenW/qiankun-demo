<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/qiankun_logo.png">
    <HelloWorld msg="Welcome to qiankun"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style lang="less" scoped>
.home {
  text-align: center;
  img {
    width: 100px;
    margin-top: 50px;
  }
}
</style>
