import Vue from 'vue'
export const state = () => ({
    reports: [],
    loading : false,
    saving : false,
    singleReport : null
})

export const getters = {
    reports:  state => state.reports,
    loading:  state => state.loading,
    saving:  state => state.saving,
    singleReport:  state => state.singleReport,
}

export const mutations = {
    SET_LOADING (state, loading)   {
        state.loading = loading
    },
    SET_SAVING (state, saving)   {
        state.saving = saving
    },
    SET_REPORTS (state, reports)   {
        state.reports = reports
    },
    SET_REPORT (state, singleReport) {
        state.singleReport = singleReport
    },
    
}

export const actions = {
    async getReports ({commit}, parameter) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + 'admin/reports', parameter)
        commit('SET_REPORTS', data)
        commit('SET_LOADING', false)
    },
    async getReport ({commit}, parameter) {
        commit('SET_LOADING', true)
        const { data } = await  this.$axios.$get(this.$config.baseURL + `admin/reports/${parameter}`)
        commit('SET_REPORT', data)
        commit('SET_LOADING', false)
    },
    
}