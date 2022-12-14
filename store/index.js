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
    bank : null,
    contacts : [],
    newsletters : [],
    analytic : null
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
    registeredUser : state => state.registeredUser,
    contacts : state => state.contacts,
    newsletters : state => state.newsletters,
    analytic : state => state.analytic
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
  SET_CONTACTS (state, contacts)   {
    state.contacts = contacts
  },
  SET_NEWSLETTERS (state, newsletters)   {
    state.newsletters = newsletters
  },
  SET_BANK(state, bank)   {
    state.bank = bank
  },
  SET_ANALYTICS (state, analytic)   {
    state.analytic = analytic
  },
  DELETE_USER(state, userId){
    let index = state.registeredUsers.findIndex(user => user.id === userId); 
    if(index > -1)
      Vue.delete(state.registeredUsers, index)
  },

  DELETE_CONTACT_US(state, contactId){
    let index = state.contacts.findIndex(contact => contact.id === contactId); 
    if(index > -1)
      Vue.delete(state.contacts, index)
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

  async getContactUs ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/contacts`, queryParam)
    commit('SET_CONTACTS', data)
    commit('SET_LOADING', false)
  }, 

  async deleteContactUs ({commit,}, queryParam) {
    commit('SET_SAVING', true)
    const {data} =await  this.$axios.$delete(this.$config.baseURL + `admin/contact/${queryParam}/delete`)
    commit('DELETE_CONTACT_US', queryParam)
    commit('SET_SAVING', false)
  },  

  async getNewsLetters ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/newsletters`, queryParam)
    commit('SET_NEWSLETTERS', data)
    commit('SET_LOADING', false)
  }, 
  async getAnalytics ({commit,}, queryParam) {
    commit('SET_LOADING', true)
    const {data} =await  this.$axios.$get(this.$config.baseURL + `admin/analytic/orders`, queryParam)
    commit('SET_ANALYTICS', data)
    commit('SET_LOADING', false)
  }, 
  
}