<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      qiankun 是一个基于 single-spa 的微前端实现库，<br>
      用来构建一个生产可用微前端架构系统。
      <a href="https://qiankun.umijs.org/zh/guide" target="_blank" rel="noopener">qiankun documentation</a>.
    </p>
    <h3>技术栈无关</h3>
    <ul>
      <li><a href="https://qiankun.umijs.org/zh/guide/getting-started" target="_blank" rel="noopener">快速上手</a></li>
      <li><a href="https://qiankun.umijs.org/zh/guide/tutorial" target="_blank" rel="noopener">项目实战</a></li>
    </ul>
    <h3>独立开发、独立部署</h3>
    <ul>
      <li><a href="https://qiankun.umijs.org/zh/api" target="_blank" rel="noopener">API</a></li>
      <li><a href="https://qiankun.umijs.org/zh/cookbook" target="_blank" rel="noopener">入门教程</a></li>
    </ul>
    <h3>增量升级</h3>
    <ul>
      <li><a href="https://qiankun.umijs.org/zh/faq" target="_blank" rel="noopener">常见问题</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
