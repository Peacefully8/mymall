<template>
  <div class="feature">
    <div
      v-for="(item,i) in recommend"
      :key="i"
    >
      <a :href="item.link"><img
          :src="item.image"
          class="imag"
        ></a>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feature',
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style scoped>
.imag {
  width: 60px;
  height: 60px;
  display: block;
  margin-bottom: 6px;
}

.feature {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 15px 0 15px 0;
  border-bottom: 8px solid #eee;
}
</style>