<template>
<client-only>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <div class="header-info">Set Crypto Rate</div>
            <form action="" @submit.prevent>                         

                <input v-model="name" class="form-control form-control-lg mb-4" type="text" placeholder="Crypto Name" aria-label=".form-control-lg example">
                <p  v-if="field_errors.name" class="text-danger"> {{ field_errors.name[0]}}</p>
                
                <input v-model="amount" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
                <p  v-if="field_errors.amount" class="text-danger"> {{ field_errors.amount[0]}}</p>
               
                <button :disabled="loading" @click="createCryptoRate" class="btn-sellgiftcards btn">{{loading ? 'Please wait...' : 'Set Crypto Rate'}}</button>

            </form>
       </div>
        <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="allCryptos" class="bg-white mt-5 p-3">
            
            <div slot="action" slot-scope="props">
                <div class="btn btn-secondary" @click="editThisCoin(props.rowData)">
                    Update    
                </div>
                <div class="btn btn-delete" @click="openDelete(props.rowData.id)">
                    Delete 
                </div>
            </div>

            <div slot="sn" slot-scope="props">
                <span>{{ props.rowIndex + 1}}</span>
            </div>

             <div slot="name" slot-scope="props">
                <span>{{ props.rowData.name }}</span>
            </div>


            <div slot="amount" slot-scope="props">
                <span>N {{ props.rowData.amount }}</span>
            </div>
        </vuetable>

        <MazDialog v-model="hasDialogOpen" :width="1000" title="Update Rate" @confirm="updateCryptoData()">
                                 

            <input v-model="Uname" class="form-control form-control-lg mb-4" type="text" placeholder="Crypto Name" aria-label=".form-control-lg example">
            <p  v-if="field_errors.name" class="text-danger"> {{ field_errors.name[0]}}</p>
                
            <input v-model="Uamount" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
            <p  v-if="field_errors.amount" class="text-danger"> {{ field_errors.amount[0]}}</p>
            

        </MazDialog>

        <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete giftcard rate" @confirm="deleteThisRate()">
            Are you sure you want to delete this Crypto rate?
        </MazDialog>

  </div>
  </client-only>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            name : "",
            amount : "",
            hasDialogOpen : false,
            openDeleteModal : false,
            cryptoId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "rate/loading",
            allCryptos : "rate/allCryptos",
            crypto : "rate/crypto",
        }),
        Uname:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.name : null
                return null
            },
            set(value){
                let item = 'name'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
        Uamount:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.amount : null
                return null
            },
            set(value){
                let item = 'amount'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
    },
    methods : {
        ...mapActions({
            createNewCryptoRate: "rate/createNewCryptoRate",
            getCryptoRate: "rate/getCryptoRate",
            updateCryptoRate: "rate/updateCryptoRate",
            deleteCryptoRate: "rate/deleteCryptoRate"
        }),
        ...mapMutations({
            SET_LOADING: "rate/SET_LOADING",
            SET_CRYPTO: "rate/SET_CRYPTO",
            SET_CRYPTO_DATA: "rate/SET_CRYPTO_DATA",
            SET_SAVING: "rate/SET_SAVING"
        }),
        async deleteThisRate(){
            try {
                let crypto_id = this.cryptoId
                await this.deleteCryptoRate(crypto_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModal = true
            this.cryptoId = value
        },
        editThisCoin(cryptoData){
            this.hasDialogOpen = true
            this.SET_CRYPTO(cryptoData)
            // console.log("data", cryptoData)
        },
        async updateCryptoData(){
            try {
                let parameter = {
                    name : this.Uname,
                    amount : this.Uamount,
                }
                let crypto_id = this.crypto ? this.crypto.id : ""
                await this.updateCryptoRate({parameter, crypto_id})
                this.SET_CRYPTO(null)
                this.hasDialogOpen = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async createCryptoRate(){
            try {
                let data = {
                    name : this.name,
                    amount : this.amount
                }
                await this.createNewCryptoRate(data)
                await this.getCryptoRate()
                this.name = ""
                this.amount = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        }
    },
    mounted(){
        this.getCryptoRate()
    }
}
</script>

<style scoped>
.btn-delete{
    /* padding: 20px; */
    background: #F8E2E2;
    /* border-radius: 10px; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #ff0000;
    cursor: pointer;
}
.bg-pad{
    padding: 20px;
}
.header-info{
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.form-control{
    box-sizing: border-box;
    width: 70%;
    height: 100px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-card{
    padding: 1.5rem;
    width: 80%;
    /* margin: auto; */
     border-radius: 30px;
}
.btn-sellgiftcards{
    background: #0C64E6;
    border-radius: 5px;
    color: #fff;
    padding: 1rem;
    font-size: 16px;
    /* font-weight: 600; */
}
@media screen and (max-width : 578px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
        font-size: 10px;
    }
   
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
    .form-card{
        width: 100%;
    }
    .form-control{
        height: 60px;
    }
}
</style>