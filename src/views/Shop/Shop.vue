<template>
  <div>
    <nav-bar>
      <div
        slot="center"
        class="shopCart"
      >购物车({{cartListLength}})</div>
    </nav-bar>
    <better-scoll
      class="wrapper"
      ref="bsRef"
    >
      <cart-list></cart-list>
    </better-scoll>
    <Summary></Summary>
  </div>
</template>

<script>
import NavBar from 'components/content/NavBar/NavBar'
import BetterScoll from 'components/common/bs/BetterScoll'
import CartList from './children/CartList'
import Summary from './children/Summary'
import { mapGetters } from 'vuex'
export default {
  name: "Shop",
  mounted() {
    this.$bus.$on('cartListImgLoad',()=> {
      this.$refs.bsRef.refresh();
    })
  },
  components: {
    NavBar,
    BetterScoll,
    CartList,
    Summary
  },
  computed: {
    ...mapGetters([
      'cartListLength',
    ])
  },

}
</script>

<style scoped>
.shopCart {
  color: #fff;
}
.wrapper {
  height: calc(100vh - 44px - 49px);
}
</style>