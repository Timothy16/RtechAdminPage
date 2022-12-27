import Vue from 'vue'
export const state = () => ({
    giftcards: [],
    allCryptos: [],
    loading : false,
    saving : false,
    giftcard : null,
    crypto : null
})

export const getters = {
    giftcards:  state => state.giftcards,
    allCryptos:  state => state.allCryptos,
    loading:  state => state.loading,
    saving:  state => state.saving,
    giftcard:  state => state.giftcard,
    crypto:  state => state.crypto,
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
    SET_GIFTCARD (state, giftcard) {
        state.giftcard = giftcard
    },
    SET_CRYPTO_RATE (state, allCryptos)   {
        state.allCryptos = allCryptos
    },
    SET_CRYPTO (state, crypto)   {
        state.crypto = crypto
    },
    ADD_GIFTCARD (state, giftcard) {
        Vue.set(state.giftcards, state.giftcards.length, giftcard)
        // let index = state.giftcards.findIndex(giftcard => giftcard.id === giftcard.id); 
    
        
        // if( index > -1){
        //     let theCard = state.giftcards[index]
        //     Vue.set(state.giftcards, state.giftcards.length, giftcard)
        // }
    },
    DELETE_GIFTCARD(state, giftcardId){
        let index = state.giftcards.findIndex(giftcard => giftcard.id === giftcardId); 
        if(index > -1)
          Vue.delete(state.giftcards, index)
    },
    DELETE_CRYPTO (state, cyptoId){
        let index = state.allCryptos.findIndex(cypto => cypto.id === cyptoId); 
        if(index > -1)
          Vue.delete(state.allCryptos, index)
    },
    SET_GIFTCARD_DATA(state, { item, value }) {
        if(!state.giftcard){
          state.giftcard ={}
        }
        Vue.set(state.giftcard, item, value);
    },
    SET_CRYPTO_DATA(state, { item, value }) {
        if(!state.crypto){
          state.crypto ={}
        }
        Vue.set(state.crypto, item, value);
    },
}

export const actions = {
 
    async createCryptoRate ({commit}, queryParam) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$post(this.$config.baseURL + 'admin/crypto/store', queryParam)
        // commit('ADD_GIFTCARD', data)
        commit('SET_LOADING', false)
    },
    async getCryptoRates ({commit}, parameter) {
        // commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'admin/crypto', parameter)
        commit('SET_CRYPTO_RATE', data)
        // commit('SET_LOADING', false)
    },
    async updateCryptoRate ({commit,}, {formData, crypto_id}) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$post(this.$config.baseURL + `admin/crypto/${crypto_id}/update?_method=patch`, formData)
        // commit('ADD_FAQ', data)
        commit('SET_SAVING', false)
    }, 

    async deleteCryptoRate ({commit,}, queryParam) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$delete(this.$config.baseURL + `admin/crypto/${queryParam}/delete`)
        let crypto_id = queryParam
        commit('DELETE_CRYPTO', crypto_id)
        commit('SET_SAVING', false)
    }, 
}