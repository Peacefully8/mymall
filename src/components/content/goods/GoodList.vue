<template>
  <div class="goodList">
    <good-list-item v-for="(item,i) in goods" :key="i" :goodItem='item'></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  name: 'GoodList',
  components: {
      GoodListItem
  },
  props: {
      goods: {
          type: Array,
          default() {
              return []
          }
      }
  }

}
</script>

<style scoped>
.goodList {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
}
</style>