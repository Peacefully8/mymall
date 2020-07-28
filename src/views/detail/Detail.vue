<template>
  <div class="detail">
    <nav-bar class="navbar">
      <div slot="left"><img
          src="~assets/img/common/back.svg"
          class="back"
          @click="back"
        ></div>
      <div slot="center">
        <ul class="detailNav">
          <li
            v-for="(item,i) in navData"
            :key="i"
            :class="{active:currentIndex===i}"
            @click="liClick(i)"
          >{{item}}</li>
        </ul>
      </div>
    </nav-bar>
    <better-scoll
      class="wrapper"
      ref="bsRef"
      :probeType='3'
      @scroll='scroll'
    >
      <Swiper
        v-if="topImg.length > 0"
        class="swiper"
      >
        <Slide
        v-for="(item,index) in topImg"
        :key="index"
      >
        <img
          :src="item"
          class="imgs"
        >
      </Slide>
      </Swiper>
      <good-info :goodInfo="goodInfo"></good-info>
      <shop-info :shopInfo="shopInfo"></shop-info>
      <img-info
        :detailDesc='detailDesc'
        :imgList='imgList'
        :imgListKey='imgListKey'
        @imgLoad='imgLoad'
      ></img-info>
      <params-info
        :params='goodsParam'
        ref='paramRef'
      ></params-info>
      <common
        :commonList='commonList'
        ref='commonRef'
      ></common>
      <good-list
        :goods="recommendList"
        ref='recommendRef'
      ></good-list>
    </better-scoll>
    <shop-tab @addCart='addCart'></shop-tab>
    <back-top
      v-show="backTopShow"
      @click.native="backTop"
    ></back-top>
  </div>
</template>

<script>
import NavBar from 'components/content/NavBar/NavBar'
import BetterScoll from 'components/common/bs/BetterScoll'
import GoodList from 'components/content/goods/GoodList'
import BackTop from 'components/content/backTop/BackTop'

import GoodInfo from './children/GoodInfo'
import ShopInfo from './children/ShopInfo'
import ImgInfo from './children/ImgInfo'
import ParamsInfo from './children/ParamsInfo'
import Common from './children/Common'
import ShopTab from './children/ShopTab'

import { Swiper, Slide } from 'vue-swiper-component';
import { getDetailData, getRecommend } from 'network/detail'
import { GoodInformation, Shop, GoodsParam } from 'common/detailData'
import { debounce } from 'common/debounce.js'

export default {
  name: 'Detail',
  data() {
    return {
      navData: ['商品', '参数', '评论', '推荐'],
      topImg: [],
      goodInfo: {},
      shopInfo: {},
      detailDesc: '',
      imgList: [],
      imgListKey: '',
      goodsParam: {},
      commonList: [],
      recommendList: [],
      currentIndex: 0,
      liOffsetTop: [],
      backTopShow: false,
      title: ''
    }
  },
  created() {
    this.getDetailData();
    this.getRecommend();
  },
  mounted() {
    let refresh = debounce(this.$refs.bsRef.refresh);
    this.$bus.$on('deimgload', () => {
      refresh();
    });
  },
  components: {
    NavBar,
    Swiper,
    Slide,
    GoodInfo,
    ShopInfo,
    ImgInfo,
    BetterScoll,
    ParamsInfo,
    Common,
    GoodList,
    ShopTab,
    BackTop,
  },
  methods: {
    async getDetailData() {
      let res = await getDetailData(this.$route.params.iid);
      // console.log(res);
      this.topImg = res.result.itemInfo.topImages;
      this.goodInfo = new GoodInformation(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
      this.shopInfo = new Shop(res.result.shopInfo);
      this.detailDesc = res.result.detailInfo.desc;
      this.imgListKey = res.result.detailInfo.detailImage[0].key;
      this.imgList = res.result.detailInfo.detailImage[0].list;
      this.goodsParam = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
      this.commonList = res.result.rate.list;
      this.title = res.result.skuInfo.title;
    },
    back() {
      this.$router.go(-1);
    },
    imgLoad() {
      this.$refs.bsRef.refresh();
      //等图片加载完，获取参数，评论，推荐的 offsetTop
      this.liOffsetTop.push(0, this.$refs.paramRef.$el.offsetTop - 44);
      this.liOffsetTop.push(this.$refs.commonRef.$el.offsetTop - 44);
      this.liOffsetTop.push(this.$refs.recommendRef.$el.offsetTop - 44);
      this.liOffsetTop.push(Number.MAX_VALUE);
    },
    async getRecommend() {
      let data = await getRecommend();
      // console.log(data);
      this.recommendList = data.data.list;
    },
    liClick(i) {
      this.currentIndex = i;
      this.$refs.bsRef.scrollTo(0, -this.liOffsetTop[i], 0);
    },
    scroll(position) {
      let y = -position.y;
      this.liOffsetTop.forEach((item, i, arr) => {
        if (arr[i] <= y && arr[i + 1] > y) {
          if (i === this.currentIndex) return;
          this.currentIndex = i;
        }
      });

      if (-position.y > 1000) this.backTopShow = true;
      if (-position.y <= 1000) this.backTopShow = false;
    },
    backTop() {
      this.$refs.bsRef.scrollTo(0, 0);
    },
    addCart() {
      let product ={};
      product.img = this.topImg[0];
      product.desc = this.detailDesc;
      product.oldPrice = this.goodInfo.oldPrice;
      product.iid = this.$route.params.iid
      product.title = this.title;
      this.$store.dispatch('addCart',product).then(res => {
        console.log(res);
        this.$toast.show(res);
      })
    }
  }

}
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.navbar {
  background-color: #fff;
  box-shadow: 0 1px 1px #eee;
}

.wrapper {
  height: calc(100vh - 44px);
}

.back {
  width: 20px;
  height: 20px;
  position: relative;
  top: 5px;
}

.detailNav {
  display: flex;
  justify-content: space-around;
}

.detailNav li {
  font-size: 13px;
  flex: 1;
}

.swiper {
  width: 100%;
  height: 300px;
}

.imgs {
  width: 100%;
}
.active {
  color: var(--color-high-text);
}
</style>