import Vue from 'vue'
import {mapGetters} from 'vuex'

const Validation = {
    install(Vue, options)   {
        Vue.mixin({
            computed:   {
                ...mapGetters({
                    field_errors: 'validation/errors'
                })
            }
        })
    }
}
Vue.use(Validation)