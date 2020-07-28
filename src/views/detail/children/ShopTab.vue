<template>
  <div class="shoptab">
    <div class="l">
      <div class="ll">
        <div class="serve"></div>
        <span>客服</span>
      </div>
      <div class="lc">
        <div class="dianpu"></div>
        <span>店铺</span>
      </div>
      <div class="lr">
        <div class="collect"></div>
        <span>收藏</span>
      </div>
    </div>
    <div class="r">
      <div class="addCart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopTab',
  methods: {
    addCart() {
      this.$emit('addCart')
    }
  }

}
</script>

<style scoped>
.shoptab {
  width: 100%;
  height: 49px;
  line-height: 49px;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  z-index: 2;
  display: flex;
}
.l {
  flex: 0.5;
  display: flex;
  justify-content: space-around;
}
.ll .serve {
  width: 22px;
  height: 22px;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 -51px/100%;
}
.lc .dianpu {
  width: 22px;
  height: 22px;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 -96px/100%;
}
.lr .collect {
  width: 22px;
  height: 22px;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 3px/100%;
}
.ll span, .lc span, .lr span {
  font-size: 15px;
  position: relative;
  top: -6px;
}
.ll div, .lc div, .lr div {
  position: relative;
  top: 3px;
  left: 3px;
}
.r {
  flex: 0.5;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.addCart {
  background-color: rgba(236, 240, 28, 0.877);
}
.buy {
  flex: 1;
  background-color: rgba(223, 151, 213, 0.911);
  color: #fff;
}
</style>