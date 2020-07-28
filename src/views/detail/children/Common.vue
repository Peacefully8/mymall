<template>
  <div class="common" v-if="commonList.length!==0">
    <div class="top"><span>用户评价</span><span>更多</span></div>
        <img :src="commonList[0].user.avatar" alt="" class="avater">
        <span>{{commonList[0].user.uname}}</span>
    <p class="content">{{commonList[0].content}}</p>
    <span class="ctime">{{commonList[0].created | dataForm}}</span>
    <span class="style">{{commonList[0].style}}</span>
  </div>
</template>

<script>
import { formatDate } from 'common/dataFormat.js'
export default {
  name: 'Common',
  props: {
      commonList: {
          type: Array,
          default() {
              return []
          }
      }
  },
  filters: {
      dataForm(time) {
        return formatDate(time,'yyyy-MM-dd hh:mm:ss');
      }
  }
}
</script>

<style scoped>
.common {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.top {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    margin-bottom: 10px;
}
.avater {
    width: 20px;
    height: 20px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    vertical-align: -12px;
    margin-right: 10px;
}
.content {
    padding: 10px 0;
}
.ctime {
    margin-right: 10px;
}
.ctime, .style {
    font-size: 12px;
    color: #aaa;
}
</style>