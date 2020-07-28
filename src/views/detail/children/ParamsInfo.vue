<template>
  <div
    v-if="Object.keys(params).length !== 0"
    class="paramsInfo"
  >
    <table
      v-for="(Item,I) in params.sizes"
      :key="I"
      class="sizes"
    >
      <tr
        v-for="(item,i) in Item"
        :key="i"
      >
        <td
          v-for="(subitem,si) in item"
          :key="si"
        >{{subitem}}</td>
      </tr>
    </table>
    <table class="infos">
      <tr v-for="(item,i) in params.infos" :key="i">
        <td>{{item.key}}</td>
        <td class="paramKey">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ParamsInfo',
  props: {
    params: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style scoped>
.paramsInfo {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}

.sizes, .infos {
  width: 100%;
  border-collapse: collapse;
}
.sizes tr, .infos tr {
  height: 42px;
  line-height: 42px;
}
.sizes td, .infos td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  width: 45px;
}
.infos {
  border-top: 1px solid rgba(100, 100, 100, 0.1);
}
.paramKey {
  color: #eb4868;
}
</style>