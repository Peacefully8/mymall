import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCount(state, product) {
      product.count++;
    },
    addProd(state, payload) {
      payload.count = 1;
      payload.checked = true;
      state.cartList.push(payload);
    }
  },
  getters: {
    cartListLength(state) {
      return state.cartList.length;
    },
    cartList(state) {
      return state.cartList
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve) => {
        let product = context.state.cartList.find(item => {
          return item.iid === payload.iid
        })
        if (product) {
          resolve('商品数量+1')
          context.commit('addCount', product)
        } else {
          resolve('添加商品成功')
          context.commit('addProd', payload)
        }
      })
    }
  },
  modules: {}
})
