<template>
  <div>
    <cart-list-item v-for="(item,i) in cartList" :key="i" :product='item'></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem'
import { mapGetters } from 'vuex'

export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  computed: {
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style>
</style>