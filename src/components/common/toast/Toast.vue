<template>
  <div
    v-show="isShow"
    class="toast"
  >
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, duration = 1000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, duration)
    }
  }

}
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  background: rgba(100, 100, 94, 0.801);
  color: #ffffff;
  padding: 2px 10px;
  transform: translate(-50%, -50%);
}
</style>