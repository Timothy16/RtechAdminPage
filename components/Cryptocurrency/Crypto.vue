<template>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <!-- <div class="header-info">Set Crypto Rate</div> -->
            <form action="" @submit.prevent>                         

                <input v-model="name" class="form-control form-control-lg mb-4" type="text" placeholder="Crypto Name" aria-label=".form-control-lg example">
                <p  v-if="field_errors.crypto_name" class="text-danger"> {{ field_errors.crypto_name[0]}}</p>
                
                <input v-model="amount" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
                <p  v-if="field_errors.crypto_amount" class="text-danger"> {{ field_errors.crypto_amount[0]}}</p>
               
                <input v-model="wallet" class="form-control form-control-lg mb-4" type="text" placeholder="Input Wallet Address" aria-label=".form-control-lg example">
                <p  v-if="field_errors.crypto_wallet" class="text-danger"> {{ field_errors.crypto_wallet[0]}}</p>
                
                <div class="form-group mt-3">
                    <label for="" class="ml-2">Upload barcode image(optional)</label>
                    <div class="trigger-layer">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload image!</span>
                        <input type="file" accept="image/*" @change="onFileChange($event)">
                    </div>
                </div>
                
               
                <div class="form-group mt-3">
                    <label for="">Is Active?</label>
                    <div class="custom-control custom-switch mb-2" dir="ltr">
                        <input v-model="status" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                        <label class="custom-control-label" for="customSwitchActive"></label>
                    </div>
                    <p  v-if="field_errors.status" class="text-danger"> {{ field_errors.status[0]}}</p>
                </div>

                <div class="prevew-edit mb-3" v-if="preview_list">
                    <div>
                        <label for="">Image selected  <span class="btn btn-danger btn-sm" @click="removeImages()">remove images</span></label>
                        <MazGallery 
                            :images="[preview_list]"
                        />
                    </div>                   
                </div>


                <button @click="setCoinRate" :disabled="loading" class="btn-sellgiftcards btn">{{loading ? 'Please wait...' : 'Set Coin Rate'}}</button>

            </form>
       </div>
       <!-- Table -->
        <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="allCryptos" class="bg-white mt-5 p-3">
            
            <div slot="action" slot-scope="props">
                <div class="btn btn-secondary btn-sm" @click="editThisCoin(props.rowData)">
                    Update    
                </div>
                <div class="btn btn-delete btn-sm" @click="openDelete(props.rowData.id)">
                    Delete 
                </div>
            </div>

            <div slot="sn" slot-scope="props">
                <span>{{ props.rowIndex + 1}}</span>
            </div>

            <div slot="name" slot-scope="props">
                <span>{{ props.rowData.crypto_name }}</span>
            </div>

            <div slot="wallet" slot-scope="props">
                <span>{{ props.rowData.crypto_wallet }}</span>
            </div>

            <div slot="status" slot-scope="props">
                <span>{{parseInt(props.rowData.status) ? "Yes" : "No"}}</span>
            </div>
            <div slot="barcode" slot-scope="props">
                <span>{{props.rowData.crypto_picture ? "Yes" : "No"}}</span>
            </div>


            <div slot="amount" slot-scope="props">
                <span>N {{ props.rowData.crypto_amount }}</span>
            </div>
        </vuetable>

        <MazDialog v-model="hasDialogOpen" :width="1000" title="Update Rate" @confirm="updateCryptoData()">
            
            <input v-model="Uname" class="form-control form-control-1 form-control-lg mb-4" type="text" placeholder="Crypto Name" aria-label=".form-control-lg example">
            <p  v-if="field_errors.crypto_name" class="text-danger"> {{ field_errors.crypto_name[0]}}</p>
                
            <input v-model="Uamount" class="form-control form-control-1 form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
            <p  v-if="field_errors.crypto_amount" class="text-danger"> {{ field_errors.crypto_amount[0]}}</p>
               
            <input v-model="Uwallet" class="form-control form-control-1 form-control-lg mb-4" type="text" placeholder="Input Wallet Address" aria-label=".form-control-lg example">
            <p  v-if="field_errors.crypto_wallet" class="text-danger"> {{ field_errors.crypto_wallet[0]}}</p>
            
            <div class="form-group  mt-3">
                    <label for="" class="ml-2">Upload barcode image(optional)</label>
                    <div class="trigger-layer trigger-layer-1">
                        <span><i class='fa fa-file-upload ml-5'></i> <br> Upload image!</span>
                        <input type="file" accept="image/*" @change="onFileChange2($event)">
                    </div>
            </div>

            <div class="form-group mt-3">
                <label for="">Is Active?</label>
                <div class="custom-control custom-switch mb-2" dir="ltr">
                    <input v-model="Ustatus" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive1">
                    <label class="custom-control-label" for="customSwitchActive1"></label>
                </div>
                <p  v-if="field_errors.status" class="text-danger"> {{ field_errors.status[0]}}</p>
            </div>

            <div class="prevew-edit mb-3" v-if="preview_list_2">
                <div>
                    <label for="">Image selected  <span class="btn btn-danger btn-sm" @click="removeImages2()">remove images</span></label>
                    <MazGallery 
                        :images="[preview_list_2]"
                    />
                </div>                   
            </div>
            <div class="prevew-edit mb-3" v-if="UBarcode">
                <div>
                    <label for="">Image selected  <span class="btn btn-danger btn-sm" @click="removeImages2()">remove images</span></label>
                    <MazGallery 
                        :images="[UBarcode]"
                    />
                </div>                   
            </div>

        </MazDialog>

        <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete giftcard rate" @confirm="deleteThisRate()">
            Are you sure you want to delete this Crypto rate?
        </MazDialog>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            name : "",
            amount : "",
            status : 0,
            wallet : "",
            hasDialogOpen : false,
            openDeleteModal : false,
            cryptoId : "",
            preview_list: null,
            imageUpload : "",
            imageUpload2 : "",
            preview_list_2 : null,
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Wallet Address', name: 'wallet', width: ""}, 
                { title: 'Is Active?', name: 'status', width: ""},
                { title: 'Barcode image?', name: 'barcode', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "crypto/loading",
            allCryptos : "crypto/allCryptos",
            crypto : "crypto/crypto",
        }),
        Uname:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.crypto_name : null
                return null
            },
            set(value){
                let item = 'crypto_name'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
        Uamount:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.crypto_amount : null
                return null
            },
            set(value){
                let item = 'crypto_amount'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
        UBarcode(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.crypto_picture : ""
                return ""
            
            // set(value){
            //     let item = 'crypto_picture'
            //     this.SET_CRYPTO_DATA({item, value })
            // }
        },
        Uwallet:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.crypto_wallet : null
                return null
            },
            set(value){
                let item = 'crypto_wallet'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
        Ustatus:{
            get(){
                if(this.crypto)
                    return  this.crypto ? this.crypto.status : null
                return null
            },
            set(value){
                let item = 'status'
                this.SET_CRYPTO_DATA({item, value })
            }
        },
    },
    methods : {
        ...mapActions({
            createCryptoRate: "crypto/createCryptoRate",
            getCryptoRates: "crypto/getCryptoRates",
            updateCryptoRate: "crypto/updateCryptoRate",
            deleteCryptoRate: "crypto/deleteCryptoRate"
        }),
        ...mapMutations({
            SET_LOADING: "crypto/SET_LOADING",
            SET_CRYPTO: "crypto/SET_CRYPTO",
            SET_CRYPTO_DATA: "crypto/SET_CRYPTO_DATA",
            SET_SAVING: "crypto/SET_SAVING"
        }),
        onFileChange(event) {
            this.imageUpload = event.target.files[0]
            const file = event.target.files[0]
            this.preview_list = URL.createObjectURL(file);
           
        },
        onFileChange2(event) {
            this.imageUpload2 = event.target.files[0]
            const file = event.target.files[0]
            this.preview_list_2 = URL.createObjectURL(file);
        },
        removeImages(){
            this.preview_list = ""
        },
        removeImages2(){
            this.preview_list_2 = ""
        },
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
                // let parameter = {
                //     crypto_name : this.Uname,
                //     crypto_amount : this.Uamount,
                //     crypto_wallet : this.Uwallet,
                //     status : this.Ustatus ? 1 : 0,
                //     crypto_picture : this.preview_list_2 ? this.imageUpload2 : this.UBarcode
                // }
                let formData = new FormData();
                formData.append('crypto_name', this.Uname)
                formData.append('crypto_amount', this.Uamount)
                formData.append('crypto_wallet', this.Uwallet)
                formData.append('status', this.Ustatus ? 1 : 0)
                if(this.preview_list_2){
                    formData.append('crypto_picture', this.preview_list_2 ? this.imageUpload2 : this.UBarcode)
                }
                
                
                let crypto_id = this.crypto ? this.crypto.id : ""
                await this.updateCryptoRate({formData, crypto_id})
                this.getCryptoRates()
                this.SET_CRYPTO(null)
                this.preview_list_2 = ""
                this.imageUpload2 = ""
                this.hasDialogOpen = false
                
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async setCoinRate(){
            try {
                // let data = {
                //     crypto_name : this.name,
                //     crypto_amount : this.amount,
                //     crypto_wallet : this.wallet,
                //     status : this.status ? 1 : 0 
                // }
                let formData = new FormData();
                formData.append('crypto_name', this.name)
                formData.append('crypto_amount', this.amount)
                formData.append('crypto_wallet', this.wallet)
                formData.append('status', this.status ? 1 : 0)
                formData.append('crypto_picture', this.imageUpload)

                await this.createCryptoRate(formData)
                await this.getCryptoRates()
                this.name = ""
                this.amount = ""
                this.wallet = ""
                this.status = 0
                this.imageUpload = ""
                this.preview_list = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        }
    },
    mounted(){
        this.getCryptoRates()
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
input[type="file"] {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        cursor: pointer;
}
.trigger-layer-1{
    width: 100% !important;
}
.trigger-layer {
        position: relative;
        width: 50%;
        font-weight: 600;
        height: 100px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin: 10px;
        padding-top: 8px;
        padding-right: 16px;
        padding-bottom: 8px;
        padding-left: 16px;
        background: #fff;
        border: 1px solid rgba(12, 100, 230, 0.7);
        border-radius: 10px;
        color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        line-height: 1.2;
        cursor : pointer
}
.form-control{
    box-sizing: border-box;
    width: 50%;
    height: 100px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-control-1{
    width: 100% !important;
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