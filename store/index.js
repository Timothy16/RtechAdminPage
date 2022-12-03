import Vue from 'vue'
export const state = () => ({
    loading:   false,
    logining: false,
    registering: false,
    loggedIn:   false,
    user:   false,
    strategy:   'local',
  })
  
  export const getters = {
    authenticated: state =>  state.auth.loggedIn,
    user : state => state.auth.user,   
    logining : state => state.logining,
    registering : state => state.registering,
    loading : state => state.loading,
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

}


export const actions = {
 
 
}