<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <h2>我是micro-app-vue2的about页面</h2>
    <button @click="$router.push('/')">返回home页面</button>
  </div>
</template>

<script>
export default {
  name: "about",
  components: {},
};
</script>

<style>
</style>
