<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="商品列表"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 商品列表部分 -->
    <van-tabs v-model="activeName" style="  margin: 0 0 80px 0;">
      <van-tab title="a">
        <template #title>综合 </template>
        <van-grid :column-num="2">
          <div class="a">
            <div v-for="i in shoppingList" :key="i.name">
              <van-image
                :src="'http://192.168.31.92:8080/Shopping' + i.defaultImg"
              />
              <p>{{ i.name }}</p>
              <span style="color: red; font-size: 18px"
                >￥{{ i.discount }}</span
              >
            </div>
          </div>
          <p
            v-if="shoppingList.length >= 10"
            @click="addShopping()"
          >
            点击加载更多
          </p>
        </van-grid>
      </van-tab>
      <van-tab title="b">
        <template #title> 价格 <van-icon name="sort" /></template>
      </van-tab>
      <van-tab title="c">
        <template #title> 新品 </template>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
      shoppingList: [],
      page: 10,
    };
  },
  created() {
    this.getshoppinglist();
  },
  mounted() {},
  methods: {
    getshoppinglist() {
      this.$http
        .post("api/Shopping/api/v1/catalog/category/product", {
          pageSize: this.page,
        })
        .then((res) => {
          this.shoppingList = res.data.data[1].productRelationList;
          console.log(res.data.data[1].productRelationList);
        });
    },
    addShopping() {
      this.$http
        .post("api/Shopping/api/v1/catalog/category/product", {
          pageSize: (this.page += 10),
        })
        .then((res) => {
          this.shoppingList = res.data.data[1].productRelationList;
        });
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style>
.a {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;

}
.a div {
  width: 48%;
}
</style>