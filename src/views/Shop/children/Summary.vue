<template>
  <div class="summary">
    <check-btn
      :checked='isSelectAll'
      @click.native="selectAllClick"
    ></check-btn>
    <p class='selectAll'>全选</p>
    <p class="getAll">合计：<span>￥{{getAllPrice}}</span></p>
    <div class="settlement">去计算({{shopSum}})</div>
  </div>
</template>

<script>
import CheckBtn from './CheckBtn'
import { mapGetters } from 'vuex'
export default {
  name: 'Summary',
  components: {
    CheckBtn
  },
  data() {
      return {
          selectall: false
      }
  },
  computed: {
    ...mapGetters([
      'cartListLength',
      'cartList'
    ]),
    getAllPrice() {
      let sum = 0;
      this.cartList.forEach(item => {
        sum += item.oldPrice.substr(1) * item.count
      })
      return sum.toFixed(2);
    },
    shopSum() {
      let sum = 0
      this.cartList.forEach(item => {
        sum += item.count
      })
      return sum;
    },
    isSelectAll() {
      if (this.cartListLength === 0) return false;
      let bool = this.cartList.find(item => {
        return item.checked == false
      });
      this.selectall = !bool;
      return !bool;
    }
  },
  methods: {
    selectAllClick() {
      this.selectall = !this.selectall;
      this.cartList.forEach(item => {
        item.checked = this.selectall;
      })
    }
  }

}
</script>

<style scoped>
.summary {
  position: fixed;
  bottom: 49px;
  background-color: #eee;
  width: 100%;
  height: 32px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 2px;
}
.selectAll {
  margin-right: 4px;
}
.getAll {
  flex: 1;
}
.settlement {
  height: 100%;
  line-height: 32px;
  color: #fff;
  background: red;
  padding: 0 15px;
}
</style>