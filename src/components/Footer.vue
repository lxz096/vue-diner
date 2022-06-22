<template>
  <div class="Footer">
  <div><router-link to="/home">首页</router-link></div>
<div><router-link to="/card">购物车</router-link></div>
<div><router-link to="/message">订单</router-link></div>
<div><router-link to="/mine">我的</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  font-size: 20px;
  div {
    color: red;
  }
}
</style>
