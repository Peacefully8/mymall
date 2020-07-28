<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shopInfo.logo">
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="center">
      <div class="cl">
        <div>
          <p class="sells">{{shopInfo.sells | sell}}</p><span class="allsell">总销量</span>
        </div>
        <div>
          <p class="sells">{{shopInfo.goodsCount}}</p><span class="allsell">全部宝贝</span>
        </div>
      </div>
      <div class="cr">
        <table>
          <tr
            v-for="(item, index) in shopInfo.score"
            :key="index"
          >
            <td>{{item.name}}</td>
            <td
              class="score"
              :class="{'score-better': item.isBetter}"
            >{{item.score}}</td>
            <td
              class="better"
              :class="{'better-more': item.isBetter}"
            ><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    sell(num) {
      if (num < 10000) return num;
      return (num / 10000).toFixed(1) + '万';
    }
  }

}
</script>

<style scoped>
.shopInfo {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}
.shopTop {
  height: 45px;
  line-height: 45px;
  color: var(--color-text);
}
.shopTop img {
  width: 45px;
  height: 45px;
  vertical-align: -16px;
  margin-right: 4px;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.center {
  display: flex;
  margin-top: 30px;
  align-items: center;
}
.cr,
.cl {
  flex: 1;
}
.cl {
  display: flex;
  justify-content: space-around;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  height: 43px;
}
.cl .sells {
  font-size: 18px;
  color: #000;
  margin-bottom: 10px;
}
.cl .allsell {
  font-size: 12px;
}

table {
  width: 120px;
  margin-left: 30px;
  font-size: 13px;
}

table td {
  padding: 5px 0;
}

.score {
  color: #5ea732;
}

.score-better {
  color: #f13e3a;
}

.better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.better-more span {
  background-color: #f13e3a;
}

.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>