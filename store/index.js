import Vue from 'vue'
export const state = () => ({
    loading:   false,
    logining: false,
    registering: false,
    loggedIn:   false,
    user:   false,
    strategy:   'local',
    registeredUsers : [],
    registeredUser : null,
    saving : false,
    banks : [],
    bank : null
  })
  
  export const getters = {
    authenticated: state =>  state.auth.loggedIn,
    user : state => state.auth.user,   
    logining : state => state.logining,
    registering : state => state.registering,
    loading : state => state.loading,
    saving : state => state.saving,
    banks : state => state.banks,
    bank : state => state.bank,
    registeredUsers : state => state.registeredUsers,
    registeredUser : state => state.registeredUser
  }

export const mutations = {
  SET_LOGGING_IN (state, payload) {
    state.logining = payload
  },
  SET_REGISTERING (state, registering) {
    state.registering = registering
  },
  SET_LOADING (state, loading)   {
    state.loading = loading
  },
  SET_SAVING (state, saving)   {
    state.saving = saving
  },
  SET_USERS (state, registeredUsers)   {
    state.registeredUsers = registeredUsers
  },
  SET_USER(state, registeredUser)   {
    state.registeredUser = registeredUser
  },
  SET_BANKS(state, banks)   {
    state.banks = banks
  },
  SET_BANK(state, bank)   {
    state.bank = bank
  },
  DELETE_USER(state, userId){
    let index = state.registeredUsers.findIndex(user => user.id === userId); 
    if(index > -1)
      Vue.delete(state.registeredUsers, index)
  },

}


export const actions = {
  async getRegisteredUsers ({commit}, parameter) {
        
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + 'admin/users', parameter)
    commit('SET_USERS', data)
    commit('SET_LOADING', false)
  },

  async getUser ({commit}, parameter) {
        
    commit('SET_LOADING', true)
    const { data } = await  this.$axios.$get(this.$config.baseURL + `admin/users/${parameter}`)
    commit('SET_USER', data)
    commit('SET_LOADING', false)
  },

  async deleteUserData ({commit,}, queryParam) {
    commit('SET_SAVING', true)
    const {data} =await  this.$axios.$delete(this.$config.baseURL + `admin/users/${queryParam}/delete`)
    let user_id = queryParam
    commit('DELETE_USER', user_id)
    commit('SET_SAVING', false)
  },

  async suspendUser ({commit,}, queryParam) {
    commit('SET_SAVING', true)
    const {data} =await  this.$axios.$post(this.$config.baseURL + `admin/users/suspend`, queryParam)
    commit('SET_SAVING', false)
  },   
  
  async getBankDetails ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/bank-details`, queryParam)
    commit('SET_BANKS', data)
    commit('SET_LOADING', false)
  }, 
  
  async getBankDetail ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/bank-details/${queryParam}`)
    commit('SET_BANK', data)
    commit('SET_LOADING', false)
  },  

}