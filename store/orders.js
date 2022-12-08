import Vue from 'vue'
export const state = () => ({
    loading:   false,
    saving : false,
    giftcardOrders : [],
    cryptoOrders : []
  })
  
  export const getters = {
    loading : state => state.loading,
    saving : state => state.saving,
    giftcardOrders : state => state.giftcardOrders,
    cryptoOrders : state => state.cryptoOrders
  }

export const mutations = {
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_GIFTCARD_ORDERS (state, giftcardOrders)   {
    state.giftcardOrders = giftcardOrders
  },
  SET_CRYPTO_ORDERS (state, cryptoOrders)   {
    state.cryptoOrders = cryptoOrders
  },
  SET_USER(state, registeredUser)   {
    state.registeredUser = registeredUser
  },
  
}


export const actions = {
  async getGiftcardOrders ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/giftcard`, queryParam)
    commit('SET_GIFTCARD_ORDERS', data)
    commit('SET_LOADING', false)
  }, 
  async getCryptoOrders ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/crypto`, queryParam)
    commit('SET_CRYPTO_ORDERS', data)
    commit('SET_LOADING', false)
  }, 
}