<template>
  <div class="">
    <div>
        <div class="bg-white">
            <div class="header-info">Crypto Orders</div>
            <div class="search-box pt-3">
                <form>
                    <div class="row">
                        <div class="col-lg-6">
                            <MazPicker
                                v-model="pickerValue2"
                                clearable
                                size="lg"
                                placeholder="Select date"
                                formatted="ll"
                                :noTime='true'
                                format="YYYY-MM-DD"
                                noNow
                                @formatted="pickerRangeValuesFormatted = $event">
                            <i slot="icon-left" class="material-icons" > date_range </i>
                            </MazPicker>
                        </div>
                        <div class="col-lg-6">
                            <MazInput
                                v-model="email"
                                @change="searchMore"
                                left-icon-name="search"
                                :clearable='true'
                                type="text"
                                placeholder="Enter user email"
                                size="lg"
                            />
                        </div>
                    </div>
                    <div class="mt-1">
                        <button type="submit" :disabled="loading" class="btn btn-primary mb-2"  @click.prevent="searchMore()">{{loading ? 'Searching...' : 'Search'}}</button>
                        <button type="submit" :disabled="loading" class="btn btn-secondary mb-2"  @click.prevent="clear()">Clear</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-if="!loading">
        <vuetable ref="vuetable"
                :fields="options"
                :api-mode="false"
                :data="filterAll" class="bg-white mt-5 p-3">
                
                <div slot="action" slot-scope="props">
                    <nuxt-link :to="'/new-orders/get-a-crypto?cryptoOrderId='+ props.rowData.id" class="btn btn-secondary btn-sm">
                        View    
                    </nuxt-link>
                </div>

                <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                </div>
                <div slot="status" slot-scope="props">
                    <span v-if="props.rowData.status === null" class="pending">{{ props.rowData.status === null ? 'Pending' : ''}}</span>
                </div>
                <div slot="name" slot-scope="props">
                    <span>{{ props.rowData.user ? props.rowData.user.name : "" }}</span>
                </div>

                <div slot="email" slot-scope="props">
                    <span>{{ props.rowData.user  ? props.rowData.user.email : "" }}</span>
                </div>

                <div slot="crypto" slot-scope="props">
                    <span>{{ props.rowData.crypto_rate ? props.rowData.crypto_rate.crypto_name : "" }}</span>
                </div>
                 <div slot="created" slot-scope="props">
                    <span><span>{{ $moment(props.rowData.created_at).format('lll') }}</span></span>
                </div>
                <div slot="amount" slot-scope="props">
                    <span>{{ props.rowData.amount ? props.rowData.amount : "" }}</span>
                </div>
        </vuetable>
    </div>
    <div  v-else>
        <Loader />
    </div>
    
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{
            pickerValue2: "",
            pickerFormatted2: null,
            email : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Full Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Email', name: 'email', width: ""}, 
                { title: 'Crypto Category', name: 'crypto', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Status', name: 'status', width: ""}, 
                { title: 'Date/Time', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
     computed: {
        ...mapGetters({
            loading : "orders/loading",
            cryptoOrders : "orders/cryptoOrders"
        }),
        filterAll(){
            try{
                return this.cryptoOrders.filter((order) => {
                if(order.user){
                    return order.user.email.toLowerCase().includes(this.email.toLowerCase() || this.email.toUpperCase())
                     
                    }
                })
                }
            catch (error) {
                console.log(error);
            }
        }, 
    },
    methods : {
         ...mapActions({
            getCryptoOrders: "orders/getCryptoOrders",
            getCryptoFilter : "orders/getCryptoFilter"
        }),
        ...mapMutations({
            SET_LOADING: "orders/SET_LOADING",
        }),
        // searchMore(){
        //     console.log("date", this.pickerValue2)
        // }
        async searchMore(){
            try {
                let data = this.pickerValue2
                await this.getCryptoFilter(data)
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
        async clear(){
            this.pickerValue2 = ''
            await this.getCryptoOrders()
        }

    },
    mounted(){
        this.getCryptoOrders()
    }
}
</script>

<style scoped>

.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    padding: 20px;
}
.search-box{
    width: 50%;
    margin: auto;
    padding-bottom: 1rem;
}
/* .form-control{
    height: 60px;
    width: 350px;
    border-radius: 15px;
    
} */
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
  font-size: 14px;
}
a{
    text-decoration: none;
    color: #fff;
}

</style>