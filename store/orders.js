import Vue from 'vue'
export const state = () => ({
    loading:   false,
    saving : false,
    giftcardOrders : [],
    giftcardOrder : null,
    cryptoOrders : [],
    cryptoOrder : null
  })
  
  export const getters = {
    loading : state => state.loading,
    saving : state => state.saving,
    giftcardOrders : state => state.giftcardOrders,
    giftcardOrder : state => state.giftcardOrder,
    cryptoOrders : state => state.cryptoOrders,
    cryptoOrder : state => state.cryptoOrder
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
  SET_GIFTCARD_ORDER (state, giftcardOrder)   {
    state.giftcardOrder = giftcardOrder
  },
  SET_CRYPTO_ORDERS (state, cryptoOrders)   {
    state.cryptoOrders = cryptoOrders
  },
  SET_CRYPTO_ORDER (state, cryptoOrder)   {
    state.cryptoOrder = cryptoOrder
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
  async getGiftcardOrder ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/giftcard/${queryParam}`)
    commit('SET_GIFTCARD_ORDER', data)
    commit('SET_LOADING', false)
  }, 
  async getGiftcardFilter ({commit,}, parameter) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/giftcard/filter/${parameter}`, )
    commit('SET_GIFTCARD_ORDERS', data)
    commit('SET_LOADING', false)
  }, 
  async getCryptoOrders ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/crypto`, queryParam)
    commit('SET_CRYPTO_ORDERS', data)
    commit('SET_LOADING', false)
  }, 
  async getCryptoOrder ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/crypto/${queryParam}`)
    commit('SET_CRYPTO_ORDER', data)
    commit('SET_LOADING', false)
  }, 
  async getCryptoFilter ({commit,}, parameter) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/order/crypto/filter/${parameter}`, )
    commit('SET_CRYPTO_ORDERS', data)
    commit('SET_LOADING', false)
  }, 
}