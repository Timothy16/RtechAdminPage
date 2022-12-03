import Vue from 'vue'
import {mapGetters, mapActions} from 'vuex'

const message = {
    install(Vue, options)   {
        Vue.mixin({
            computed:   {
                ...mapGetters({
                    MessageInfo: 'message/MessageInfo'
                })
            },
            methods:{
                ...mapActions({
                    clearMessage: 'message/clearMessage'
                })
            }
        })
    }
}
Vue.use(message)