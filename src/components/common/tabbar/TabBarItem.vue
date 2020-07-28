<template>
  <div class="tabItem">
    <div>
      <div @click="$router.replace(path)" class="wrapper">
        <span v-if="!active">
          <slot name="icon"></slot>
        </span>
        <span v-else>
          <slot name="icon_active"></slot>
        </span>
      </div>
      <span :class="{active:active,text:true}"><slot name="text"></slot></span>
    </div>
  </div>

</template>
    
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: {
      type: String,
      required: true
    }
  },
  methods: {
  },
  computed: {
    active() {
      return this.$route.path === this.path
    }
  }
}


</script>

<style scoped>
.tabItem img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
    color: var(--color-tint);
}
.text {
  font-size: 14px;
}
.wrapper {
  margin-bottom: 2px;
}
</style>
