<template>
  <el-container>
    <TheSidebar />
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import TheSidebar from '@/sidebar'
export default {
  components: {
    TheSidebar
  }
}
</script>

<style lang="less">
.el-container {
  height: 100%;
  .el-main {
    padding: 0;
    margin: 0;
  }
}
</style>
