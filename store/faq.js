import Vue from 'vue'
export const state = () => ({
    faqs: [],
    loading : false,
    saving : false,
    singleFaq : null
})

export const getters = {
    faqs:  state => state.faqs,
    loading:  state => state.loading,
    saving:  state => state.saving,
    singleFaq:  state => state.singleFaq,
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_FAQS (state, faqs)   {
        state.faqs = faqs
    },
    SET_FAQ (state, singleFaq) {
        state.singleFaq = singleFaq
    },
    ADD_FAQ (state, singleFaq) {

        let index = state.faqs.findIndex(faq => faq.id === singleFaq.id); 
    
        let length = state.faqs.length
        if( index > -1){
          Vue.set(state.faqs, index, singleFaq)
        }else{
          Vue.set(state.faqs, length, singleFaq)
        }
    },
    DELETE_FAQ(state, faqId){
        let index = state.faqs.findIndex(faq => faq.id === faqId); 
        if(index > -1)
          Vue.delete(state.faqs, index)
    },
    SET_FAQ_DATA(state, { item, value }) {
        if(!state.singleFaq){
          state.singleFaq ={}
        }
        Vue.set(state.singleFaq, item, value);
    },
}

export const actions = {
    async getFaqs ({commit}, parameter) {
        
        // commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get('/api/admin/faq', parameter)
        commit('SET_FAQS', data)
        // commit('SET_LOADING', false)
    },
    async addNewFaq ({commit}, queryParam) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$post('/api/admin/faq/store', queryParam)
        commit('SET_LOADING', false)
    },
    async updateThisFaq ({commit,}, {parameter, faq_id}) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$patch(`/api/admin/faq/${faq_id}/update`, parameter)
        // commit('ADD_FAQ', data)
        commit('SET_SAVING', false)
    }, 
    async deleteThisFaqData ({commit,}, queryParam) {
        commit('SET_SAVING', true)
        const {data} =await  this.$axios.$delete(`/api/admin/faq/${queryParam}/delete`)
        let faq_id = queryParam
        commit('DELETE_FAQ', faq_id)
        commit('SET_SAVING', false)
    }, 
}