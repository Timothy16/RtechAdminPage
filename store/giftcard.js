import Vue from 'vue'
export const state = () => ({
    giftcards: [],
    loading : false,
    saving : false,
    giftcardData : null,
})

export const getters = {
    giftcards:  state => state.giftcards,
    loading:  state => state.loading,
    saving:  state => state.saving,
    giftcardData:  state => state.giftcardData,
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_GIFTCARDS_RATE (state, giftcards)   {
        state.giftcards = giftcards
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
    ADD_GIFTCARD (state, giftcard) {
        Vue.set(state.giftcards, state.giftcards.length, giftcard)
    },
    DELETE_GIFTCARD(state, giftcardId){
        let index = state.giftcards.findIndex(giftcard => giftcard.id === giftcardId); 
        if(index > -1)
          Vue.delete(state.giftcards, index)
    },
    
}

export const actions = {
    async getGiftcardsRate ({commit}, parameter) {
        
        // commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'admin/rate-giftcard', parameter)
        commit('SET_GIFTCARDS_RATE', data)
        // commit('SET_LOADING', false)
    },
    async createNewGiftcard ({commit}, queryParam) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$post(this.$config.baseURL + 'admin/giftcard/store', queryParam)
        // commit('ADD_GIFTCARD', data)
        commit('SET_LOADING', false)
    },
    async updateGiftcard ({commit,}, {giftcard_id, formData}) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$patch(this.$config.baseURL + `admin/giftcard/${giftcard_id}/update`, formData)
        // commit('ADD_FAQ', data)
        commit('SET_SAVING', false)
    }, 
    async deleteGiftcardRate ({commit,}, queryParam) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$delete(this.$config.baseURL + `admin/rate-giftcard/${queryParam}/delete`)
        let giftcard_id = queryParam
        commit('DELETE_GIFTCARD', giftcard_id)
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