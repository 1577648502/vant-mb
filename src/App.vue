<template>
  <div id="app">
    <router-view />
       <van-tabbar v-model="active" v-if="this.$route.path!='/datail'">
      <van-tabbar-item name="首页" icon="wap-home-o" to="home">首页</van-tabbar-item>
      <van-tabbar-item name="分类" icon="apps-o" to="classify">分类</van-tabbar-item>
      <van-tabbar-item name="签到" icon="underway-o" to="sign">签到</van-tabbar-item>
      <van-tabbar-item name="购物车" icon="shopping-cart-o" to="shoppingCart">购物车</van-tabbar-item>
      <van-tabbar-item name="个人中心" icon="manager-o" to="personalCenter">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:"首页"
    };
  },
  mounted() {
    console.log(this.$route.path);
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
