<template>
  <div class="tabcontrol">
    <div
      v-for="(item,i) in title"
      :key="i"
      :class="{active:currentIndex===i}"
      @click="changTab(i)"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    changTab(i) {
      this.currentIndex = i;
      this.$emit('tabClick',i);
    }
  }
}
</script>

<style scoped>
.tabcontrol {
  display: flex;
  justify-content: space-around;
  text-align: center;
  line-height: 40px;
  height: 40px;
  background-color: #fff;
  /* position: sticky; */
  /* top: 43px; */
  box-sizing: border-box;
  padding-bottom: 4px;
  z-index: 10;
}
.tabcontrol div {
    padding: 0 5px 0 5px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
}
</style>