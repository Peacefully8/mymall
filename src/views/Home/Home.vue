<template>
  <div>
    <nav-bar>
      <div
        slot="center"
        class="shopping"
      >购物街</div>
    </nav-bar>
    <tab-control
      :title="title"
      @tabClick="tabClick"
      ref='tabControlRef1'
      v-show="tabConVisible"
      class="tabControl1"
    ></tab-control>
    <better-scoll
      class="wrapper"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp='pullingUp'
      ref="bscroll"
    >
      <Swiper
        v-if="banner.length > 0"
        class="swiper"
      >
        <Slide
          v-for="(item,index) in banner"
          :key="index"
        >
          <a :href="item.link"><img
              :src="item.image"
              class="imgs"
              @load="swiperLoad"
            ></a>
        </Slide>
      </Swiper>
      <Feature :recommend="recommend"></Feature>
      <Recommend />
      <tab-control
        :title="title"
        @tabClick="tabClick"
        ref='tabControlRef'
      ></tab-control>
      <good-list :goods="goods[currentType].list"></good-list>
    </better-scoll>
    <back-top
      v-show="backTopShow"
      @click.native="backTop"
    ></back-top>
  </div>
</template>

<script>
import NavBar from 'components/content/NavBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backTop/BackTop'
import BetterScoll from 'components/common/bs/BetterScoll'
import Feature from './children/Feature'
import Recommend from './children/Recommend'
import { Swiper, Slide } from 'vue-swiper-component';

import { getHomeData, getGoodsData } from 'network/home'
import { debounce } from 'common/debounce.js'

import axios from 'axios'
export default {
  name: "Home",
  data() {
    return {
      banner: [],
      recommend: [],
      title: ['流行', '新款', '精选'],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      backTopShow: false,
      isLoad: false,
      tabControlOffset: 0,
      tabConVisible: false,
      scrollY: 0
    }
  },
  components: {
    NavBar,
    Swiper,
    Slide,
    Feature,
    Recommend,
    TabControl,
    GoodList,
    BetterScoll,
    BackTop
  },
  created() {
    this.getHomeData();
    this.getGoodsData('pop');
    this.getGoodsData('new');
    this.getGoodsData('sell');
  },
  methods: {
    async getHomeData() {
      const { data: res } = await getHomeData()
      this.banner = res.banner.list;
      this.recommend = res.recommend.list;
    },
    async getGoodsData(type) {
      this.goods[type].page++;
      const { data: res } = await getGoodsData(type, this.goods[type].page);
      this.goods[type].list.push(...res.list);
      // console.log(res);
      this.$refs.bscroll.finishPullUp();
    },
    tabClick(i) {
      switch (i) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControlRef.currentIndex = i;
      this.$refs.tabControlRef1.currentIndex = i;
    },
    contentScroll(position) {
      // 显示与隐藏backtop
      if (-position.y > 1000) this.backTopShow = true;
      if (-position.y <= 1000) this.backTopShow = false;

      //tabControl的固定
      // console.log(-position.y, this.tabControlOffset);
      if (this.tabControlOffset) {
        if (-position.y > this.tabControlOffset + 44) this.tabConVisible = true;
        if (-position.y <= this.tabControlOffset + 44) this.tabConVisible = false;
      }

    },
    backTop() {
      this.$refs.bscroll.scrollTo(0, 0);
    },
    pullingUp() {
      this.getGoodsData(this.currentType);
    },
    swiperLoad() {
      if (!this.isLoad) {
        //tabControl的offset
        this.tabControlOffset = this.$refs.tabControlRef.$el.offsetTop;
      };
      this.isLoad = true;
    }
  },
  mounted() {
    //bs刷新，重新计算高度
    let refresh = debounce(this.$refs.bscroll.refresh, 300);
    this.$bus.$on('imgload', () => {
      refresh();
    });
  },
  activated() {
    this.$refs.bscroll.refresh();
    this.$refs.bscroll.scrollTo(0,this.scrollY,0);
  },
  deactivated() {
    this.scrollY = this.$refs.bscroll.getScrollY();
  }

}
</script>

<style scoped>
.shopping {
  color: #ffffff;
}
.imgs {
  width: 100%;
  height: 180px;
}
.swiper {
  margin-top: 44px;
}
.wrapper {
  height: calc(100vh - 44px - 49px);
}
.tabControl1 {
  position: fixed;
  width: 100%;
}
</style>