<template>
  <div class="select">
    <img
      src="~assets/img/cart/tick.svg"
      :class="{active:checked}"
    >
  </div>
</template>

<script>
export default {
  name: 'CheckBtn',
  props: {
    checked:{
      type: Boolean,
    }
  }
}
</script>

<style scoped>
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
  border-color: red !important;
}
.img img {
  width: 74px;
  height: 91px;
}
</style>