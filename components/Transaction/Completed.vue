<template>
  <div class="">
    <div class="bg-white">
        <div class="header-info">Completed Transactions</div>
        <div class="search-box pt-3">
            <form>
                <div class="row">
                    <!-- <div class="col-lg-6">
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
                    </div> -->
                    <div class="col-lg-12">
                        <MazInput
                            v-model="email"
                            left-icon-name="search"
                            :clearable='true'
                            type="text"
                            placeholder="Enter Name"
                            size="lg"
                        />
                    </div>
                </div>
                <!-- <div class="mt-1">
                    <button type="submit" class="btn btn-secondary mb-2">Search</button>
                </div> -->
            </form>
        </div>
    </div>
   <div v-if="!loading">
        <vuetable ref="vuetable"
                :fields="options"
                :api-mode="false"
                :data="filterAll" class="p-3 table-responsive-lg bg-white mt-3 table-lg">
                
                <div slot="action" slot-scope="props">
                    <nuxt-link :to="'/transactions/get-giftcard-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Giftcard'">
                        View    
                    </nuxt-link>
                    <nuxt-link :to="'/transactions/get-crypto-transaction?orderId='+ props.rowData.id" class="btn btn-secondary" v-if="props.rowData.product_type === 'Crypto'">
                        View    
                    </nuxt-link>
                </div>

                <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                </div>

                <div slot="name" slot-scope="props">
                    <span>{{ props.rowData.users ? props.rowData.users.name : "" }}</span>
                </div>

                <div slot="status" slot-scope="props">
                    <span v-if="props.rowData.status === null" class="pending">{{ props.rowData.status === null ? 'Pending' : ''}}</span>
                    <span v-if="props.rowData.status === '1'" class="pending">{{ props.rowData.status === '1' ? 'Accepted' : ''}}</span>
                    <span v-if="props.rowData.status === '2'" class="completed">{{ props.rowData.status === '2' ? 'Completed' : ''}}</span>
                    <span v-if="props.rowData.status === '3'" class="rejected">{{ props.rowData.status === '3' ? 'Rejcted' : ''}}</span>
                </div>

                <div slot="email" slot-scope="props">
                    <span>{{ props.rowData.users.email ? props.rowData.users.email : "" }}</span>
                </div>
                 <div slot="description" slot-scope="props">
                    <span>{{ props.rowData.description ? props.rowData.description : "" }}</span>
                </div>
                <div slot="product_type" slot-scope="props" >
                    <span >{{ props.rowData.product_type ? props.rowData.product_type : "" }}</span>
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
                { title: 'Order Description', name: 'description', width: ""}, 
                { title: 'Order Type', name: 'product_type', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Status', name: 'status', width: ""},
                { title: 'Date/Time', name: 'created', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "transactions/loading",
            transactions : "transactions/completedTransactions"
        }),
        filterAll(){
            try{
                return this.transactions.filter((transaction) => {
                if(transaction.users){
                    return transaction.users.email.toLowerCase().includes(this.email.toLowerCase() || this.email.toUpperCase())
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
            getCompletedTransactions: "transactions/getCompletedTransactions",
            // getGiftcardFilter : "orders/getGiftcardFilter"
        }),
        ...mapMutations({
            SET_LOADING: "transactions/SET_LOADING",
        }),
        // async searchMore(){
        //     try {
        //         let data = this.pickerValue2
        //         await this.getGiftcardFilter(data)
        //     } catch (error) {
        //         this.SET_LOADING(false)
        //     }
        // },
        // async clear(){
        //     this.pickerValue2 = ''
        //     await this.getGiftcardOrders()
        // }

    },
    mounted(){
        this.getCompletedTransactions()
    }
}
</script>

<style scoped>
.completed{
  color: #107C10;
  background: rgba(16, 124, 16, 0.2);
  border-radius: 40px;
  padding: .5rem .7rem;
  font-size: 14px;
}
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
  font-size: 14px;
}
.rejected{
  color: #FF0000;
  padding: .5rem .7rem;
  background: rgba(255, 0, 0, 0.2);
  border-radius: 40px;
  font-size: 14px;
}
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
a{
    text-decoration: none;
    color: #fff;
}
/* .form-control{
    height: 60px;
    width: 350px;
    border-radius: 15px;
    
} */
</style>