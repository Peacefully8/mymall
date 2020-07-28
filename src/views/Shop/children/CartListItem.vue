<template>
  <div class="cartListItem">
    <check-btn :checked="product.checked" @click.native="selectClick"></check-btn>
    <div class="img"><img
        :src="product.img"
        @load="imgLoad"
      ></div>
    <div class="info">
      <p class="title">{{product.title}}</p>
      <p class="desc">{{product.desc}}</p>
      <p class="pc">
        <span class="price">{{product.oldPrice}}</span>
        <span>x{{product.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckBtn from './CheckBtn'
export default {
  name: 'CartListItem',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    console.log(this.product);
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('cartListImgLoad');
    },
    selectClick() {
      this.product.checked = !this.product.checked;
    }
  },
  components: {
    CheckBtn
  }

}
</script>

<style scoped>
.cartListItem {
  padding: 10px 8px;
  display: flex;
  border: 1px solid #eee;
}
.select {
  display: flex;
  align-items: center;
}
.select img {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 50%;
  border: 1px solid;
}
.active {
  background-color: red;
  border-color: red!important;
}
.img img {
  width: 74px;
  height: 91px;
}
.info {
  padding: 0 8px;
  min-width: 0;
}
.title {
  font-weight: bold;
  margin-bottom: 16px;
  font-size: 18px;
}
.desc {
  font-size: 15px;
}
.title,
.desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pc {
  display: flex;
  justify-content: space-between;
  margin-top: 23px;
}
.price {
  color: rgb(245, 143, 143);
}
</style>