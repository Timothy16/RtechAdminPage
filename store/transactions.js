import Vue from 'vue'
export const state = () => ({
    loading:   false,
    saving : false,
    allTransactions : [],
    acceptedTransactions : [],
    completedTransactions : [],
    rejectedTransactions : [],
    transaction : null
  })
  
  export const getters = {
    loading : state => state.loading,
    saving : state => state.saving,
    transaction :  state => state.transaction,
    allTransactions : state => state.allTransactions,
    acceptedTransactions : state => state.acceptedTransactions,
    completedTransactions : state => state.completedTransactions,
    rejectedTransactions :  state => state.rejectedTransactions
  }

export const mutations = {
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_TRANSACTIONS (state, allTransactions)   {
    state.allTransactions = allTransactions
  },
  SET_ACCEPTED_TRANSACTIONS (state, acceptedTransactions)   {
    state.acceptedTransactions = acceptedTransactions
  },
  SET_COMPLETED_TRANSACTIONS (state, completedTransactions)   {
    state.completedTransactions = completedTransactions
  },
  SET_REJECTED_TRANSACTIONS (state, rejectedTransactions)   {
    state.rejectedTransactions = rejectedTransactions
  },
  SET_SINGLE_TRANSACTIONS (state, transaction)   {
    state.transaction = transaction
  },
  
}


export const actions = {
  async getAllTransactions ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/transactions`, queryParam)
    commit('SET_TRANSACTIONS', data)
    commit('SET_LOADING', false)
  }, 
  async getAcceptedTransactions ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/transactions/status/1`, queryParam)
    commit('SET_ACCEPTED_TRANSACTIONS', data)
    commit('SET_LOADING', false)
  }, 
  async getCompletedTransactions ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/transactions/status/2`, queryParam)
    commit('SET_COMPLETED_TRANSACTIONS', data)
    commit('SET_LOADING', false)
  }, 
  async getRejectedTransactions ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/transactions/status/3`, queryParam)
    commit('SET_REJECTED_TRANSACTIONS', data)
    commit('SET_LOADING', false)
  }, 
  async getSingleTransactions ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/transactions/${queryParam}`)
    commit('SET_SINGLE_TRANSACTIONS', data)
    commit('SET_LOADING', false)
  }, 
  async compeleteRejectTransaction ({commit,}, {formData, order_id}) {
    commit('SET_SAVING', true)
    const {data} =await  this.$axios.$post(this.$config.baseURL + `admin/transactions/status/${order_id}?_method=patch`, formData)
    // commit('SET_CRYPTO_ORDERS', data)
    commit('SET_SAVING', false)
  }, 

}