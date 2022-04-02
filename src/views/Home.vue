<template>
  <div id="app">
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-grid style="margin-top: 10px">
      <van-grid-item
        icon="bag"
        text="全部商品"
        style="color: red"
        to="shopping"
      />
      <van-grid-item icon="award" text="优惠卷" style="color: red" />
      <van-grid-item
        icon="column"
        text="积分商品"
        style="color: red"
        to="datail"
      />
      <van-grid-item icon="star" text="积分签到" style="color: red" />
    </van-grid>
    <p style="text-align: left; padding: 5px">基础用法</p>
    <van-grid :column-num="2">
      <van-grid-item v-for="index in 2" :key="index">
        <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
        <p>文字</p>
        <span style="color: red; font-size: 18px">￥价格</span>
      </van-grid-item>
    </van-grid>

 
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      active: "",
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  mounted() {},
  methods: {},
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
img {
  width: 100%;
  height: 100%;
}
.van-swipe {
  height: 300px;
}
p {
  margin: 5px 0;
}
</style>
