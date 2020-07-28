<template>
  <div
    class="goodListItem"
    @click="goDetail"
  >
    <img
      v-lazy='imgsrc'
      @load="imgload"
    >
    <p class="title">{{goodItem.title}}</p>
    <span class="price">{{goodItem.price}}</span>
    <span class="collect">{{goodItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgload() {
      if (this.$route.path.includes("home")) {
        this.$bus.$emit('imgload');
      }else if(this.$route.path.includes("detail")){
        this.$bus.$emit('deimgload');
      }
    },
    goDetail() {
      this.$router.push(`/detail/${this.goodItem.iid}`)
    }
  },
  computed: {
    imgsrc() {
      return this.goodItem.image || this.goodItem.show.img;
    }
  }

}
</script>

<style scoped>
.goodListItem {
  width: 48%;
  margin-bottom: 4px;
}

.goodListItem img {
  width: 100%;
  border-radius: 5px;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 5px 0 3px 0;
}
.price {
  color: var(--color-high-text);
  margin-right: 11px;
}
.collect::before {
  content: "";
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  position: relative;
  display: inline-block;
  left: -2px;
  top: 2px;
}
</style>