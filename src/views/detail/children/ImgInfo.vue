<template>
  <div class="imgInfo">
    <div class="top">
      <div class="start"></div>
      <p class="detail">{{detailDesc}}</p>
      <div class="end"></div>
    </div>
    <p class="textWear">{{imgListKey}}</p>
    <img
      :src="item"
      v-for="(item,i) in imgList"
      :key="i"
      class="imgList"
      @load="imgLoad"
    >
  </div>
</template>

<script>
export default {
  name: 'ImgInfo',
  props: {
    detailDesc: {
      type: String,
      default: ''
    },
    imgList: {
      type: Array,
      default() {
        return []
      }
    },
    imgListKey: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    imgLoad() {
      this.count++;
      if(this.count === this.imgList.length) {
        this.$emit('imgLoad');
      }
    }
  }


}
</script>

<style scoped>
.imgInfo {
  padding: 20px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.start,
.end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
}
.start::before,
.end::after {
  content: "";
  display: inline-block;
  width: 5px;
  height: 5px;
  background-color: #000;
  position: relative;
}
.start::before {
  top: -14px;
}
.end::after {
  top: -14px;
  right: -85px;
}
.detail {
  padding: 10px 0;
  font-size: 14px;
}
.end {
  float: right;
}
.textWear {
  margin: 10px 0 10px 0px;
  color: #333;
  font-size: 15px;
}

.imgList {
  width: 100%;
}
</style>