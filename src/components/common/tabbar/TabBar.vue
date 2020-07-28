<template>
  <div class="tabbar">
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" slot="icon">
      <img src="~assets/img/tabbar/home_active.svg" slot="icon_active">
      <span slot="text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" slot="icon">
      <img src="~assets/img/tabbar/category_active.svg" slot="icon_active">
      <span slot="text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shop">
      <img src="~assets/img/tabbar/shopcart.svg" slot="icon">
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="icon_active">
      <span slot="text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" slot="icon">
      <img src="~assets/img/tabbar/profile_active.svg" slot="icon_active">
      <span slot="text">我的</span>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem'

export default {
  name: 'TabBar',
  components: {
    TabBarItem
  },
  data() {
    return {
    }
  }

}
</script>

<style scoped>
.tabbar {
  height: 49px;
  width: 100%;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 0 #eee;
  display: flex;
  justify-content: space-around;
  text-align: center;
  color: #000;;
  align-items: center;
}
</style>
