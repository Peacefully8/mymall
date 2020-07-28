<template>
  <div
    class="goodInfo"
    v-if="Object.keys(goodInfo).length !== 0"
  >
    <p class="desc">{{goodInfo.desc}}</p>
    <span class="price">{{goodInfo.price}}</span>
    <span class="oldPrice">{{goodInfo.oldPrice}}</span>
    <span class="discountDesc">{{goodInfo.discountDesc}}</span>
    <ul class="scs">
      <li>{{goodInfo.sell}}</li>
      <li>{{goodInfo.collect}}</li>
      <li>{{goodInfo.services[goodInfo.services.length-1].name}}</li>
    </ul>
    <ul class="services">
      <li
        v-for="i in goodInfo.services.length-1"
        :key="i"
      ><img :src="goodInfo.services[i].icon">{{goodInfo.services[i].name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'GoodInfo',
  props: {
    goodInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    
  }

}
</script>

<style scoped>
.goodInfo {
  padding: 8px 8px 0 8px;
  border-bottom: 5px solid #f2f5f8;
}

.desc {
  text-indent: 1em;
  color: #222;
  padding-bottom: 4px;
}

.price {
  font-size: 24px;
  color: var(--color-high-text);
  margin-right: 2px;
}

.oldPrice {
  font-size: 13px;
  text-decoration: line-through;
  color: #999;
}

.discountDesc {
  font-size: 12px;
  padding: 2px 5px;
  color: #fff;
  background-color: var(--color-high-text);
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -8px;
}

.scs {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  height: 30px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.scs li {
  font-size: 13px;
  color: #999;
  line-height: 30px;
}

.services {
  display: flex;
  justify-content: space-between;
  height: 61px;
  line-height: 61px;
}
.services li {
  font-size: 13px;
  color: #333;
}
.services li img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
</style>