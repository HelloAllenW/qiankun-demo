<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <h2>我是micro-app-vue2的home页面</h2>
    <button @click="$router.push('about')">跳转about页面</button>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>

<style>
</style>
