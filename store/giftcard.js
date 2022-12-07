import Vue from 'vue'
export const state = () => ({
    giftcards: [],
    loading : false,
    saving : false,
    giftcardData : null,
    giftcardRates : [],
    giftcardRate : null
})

export const getters = {
    giftcards:  state => state.giftcards,
    loading:  state => state.loading,
    saving:  state => state.saving,
    giftcardData:  state => state.giftcardData,
    giftcardRates : state => state.giftcardRates,
    giftcardRate : state => state.giftcardRate
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_SINGLE_RATE(state, giftcardRate)   {
        state.giftcardRate = giftcardRate
    },
    SET_GIFTCARDS_RATE (state, giftcardRates)   {
        state.giftcardRates = giftcardRates
    },
    SET_ALL_GIFTCARDS (state, giftcards)   {
        state.giftcards = giftcards
    },
    SET_GIFTCARD (state, giftcardData) {
        state.giftcardData = giftcardData
    },
    SET_GIFTCARD_DATA(state, { item, value }) {
        if(!state.giftcardData){
          state.giftcardData ={}
        }
        Vue.set(state.giftcardData, item, value);
    },
    SET_GIFTCARD_RATE_DATA(state, { item, value }) {
        if(!state.giftcardRate){
          state.giftcardRate ={}
        }
        Vue.set(state.giftcardRate, item, value);
    },
    ADD_RATE (state, rate) {

        let index = state.giftcardRates.findIndex(i => i.id === rate.id); 
    
        let length = state.giftcardRates.length
        if( index > -1){
          Vue.set(state.giftcardRates, index, rate)
        }else{
          Vue.set(state.giftcardRates, length, rate)
        }
      },
    ADD_GIFTCARD (state, giftcard) {
        Vue.set(state.giftcards, state.giftcards.length, giftcard)
    },
    DELETE_GIFTCARD_RATE(state, rateId){
        let index = state.giftcardRates.findIndex(rate => rate.id === rateId); 
        if(index > -1)
          Vue.delete(state.giftcardRates, index)
    },
    
}

export const actions = {
    async getGiftcardsRate ({commit}, parameter) {
        
        // commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `admin/rate/giftcard/${parameter}`)
        commit('SET_GIFTCARDS_RATE', data)
        // commit('SET_LOADING', false)
    },
    async updateGiftcardRate ({commit,}, {giftcard_id, parameter}) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$post(this.$config.baseURL + `admin/giftcard-rate/${giftcard_id}/update?_method=patch`, parameter)
        commit('ADD_RATE', data)
        commit('SET_SAVING', false)
    }, 
    async createNewGiftcard ({commit}, queryParam) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$post(this.$config.baseURL + 'admin/giftcard/store', queryParam)
        // commit('ADD_GIFTCARD', data)
        commit('SET_LOADING', false)
    },
    async updateGiftcard ({commit,}, {giftcard_id, formData}) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$post(this.$config.baseURL + `admin/giftcard/${giftcard_id}/update?_method=patch`, formData)
        commit('SET_GIFTCARD', data)
        commit('SET_SAVING', false)
    }, 
    async deleteThisGiftcardRate ({commit,}, queryParam) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$delete(this.$config.baseURL + `admin/giftcard-rate/${queryParam}/delete`)
        let giftcard_rate_id = queryParam
        commit('DELETE_GIFTCARD_RATE', giftcard_rate_id)
        commit('SET_SAVING', false)
    }, 
    async getAllGiftcards ({commit}, parameter) {
        
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'admin/giftcard', parameter)
        commit('SET_ALL_GIFTCARDS', data)
        commit('SET_LOADING', false)
    },
    async createGiftcardRate ({commit}, queryParam) {
        commit('SET_SAVING', true)
        const { data } = await  this.$axios.$post(this.$config.baseURL + 'admin/giftcard-rate/store', queryParam)
        // commit('ADD_GIFTCARD', data)
        commit('SET_SAVING', false)
    },
    async getGiftcard ({commit}, parameter) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `admin/giftcard/${parameter}`,)
        commit('SET_GIFTCARD', data)
        commit('SET_LOADING', false)
    },
}