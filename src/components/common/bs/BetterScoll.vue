<template>
  <div
    class="wrapper"
    ref="scoll"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BetterScoll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    let wrapper = this.$refs.scoll;
    this.scroll = new BScroll(wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on('scroll', (position) => {
      this.$emit("scroll", position);
    });
    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp');
    })
    

  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll.y;
    }
  }

}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>