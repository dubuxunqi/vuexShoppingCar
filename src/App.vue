<template>
  <div id="app">
    <router-view/>
    <div class="footer">
      <router-link to="/">列表</router-link>
      <router-link to="/car">购物车</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .footer{position: fixed;bottom: 0;width: 100%;}
  .footer a{text-decoration: none;width: 50%;text-align: center;display: block;float: left;height: 40px;font-size: 20px;line-height: 40px;}
</style>
