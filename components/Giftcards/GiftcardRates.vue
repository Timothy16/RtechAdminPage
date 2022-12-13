<template>
<client-only>
    <div class="bg-white p-4 mt-3">
       <!-- Table -->
       <h5><strong>Giftard Rate Categories</strong></h5>
        <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="giftcardRates" class="">
            
            <div slot="action" slot-scope="props">
                <div class="btn btn-secondary btn-sm" @click="editThisCard(props.rowData)">
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
                <span>{{ props.rowData.giftcard_name }}</span>
            </div>

            <div slot="cardType" slot-scope="props">
                <span>{{ props.rowData.card_type }}</span>
            </div>

            <div slot="terms" slot-scope="props">
                <span>{{ props.rowData.terms }}</span>
            </div>

            <div slot="status" slot-scope="props">
                <span>{{parseInt(props.rowData.status) ? "Yes" : "No" }}</span>
            </div>

            <div slot="amount" slot-scope="props">
                <span>{{props.rowData.currency}} {{ props.rowData.card_amount_rate }}</span>
            </div>
        </vuetable>
        <MazDialog v-model="hasDialogOpenN" :width="1000" title="Update Rate" @confirm="updateGiftcardData()">
                <!-- <div class="form-group">
                    <label for="">Select Giftcard</label>
                    <select v-model="giftcardId" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                        <option value="" selected>Select Giftcard</option>
                        <option :value="giftcard.id" v-for="(giftcard, index) in giftcards" :key="index">{{giftcard.giftcard_name}}</option>
                    </select>
                </div>                   -->
                <div class="form-group">
                    <label for="">Category Name</label>
                    <input v-model="Uname" class="form-control form-control-lg mb-4" type="text" placeholder="Category Name" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.giftcard_name" class="text-danger"> {{ field_errors.giftcard_name[0]}}</p>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Card Type</label>
                            <select v-model="UcardType" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                                <option value="" selected>Select Card Type</option>
                                <option value="Pysical Card">Pysical Card</option>
                                <option value="Virtual Card">Virtual Card</option>
                            </select>
                        </div> 
                        <p  v-if="field_errors.card_type" class="text-danger"> {{ field_errors.card_type[0]}}</p>   
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Card Rate</label>
                            <input v-model="Uamount" class="form-control form-control-lg mb-4" type="text" placeholder="Card Rate" aria-label=".form-control-lg example">
                            <p  v-if="field_errors.card_amount_rate" class="text-danger"> {{ field_errors.card_amount_rate[0]}}</p>
                        </div>  
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Card Currency</label>
                            <select v-model="Ucurrency" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                                <option value="" selected>Select Currency</option>
                                <option value="NGN">NGN </option>
                                <option value="$">$</option>
                            </select>
                        </div>
                        <p  v-if="field_errors.currency" class="text-danger"> {{ field_errors.currency[0]}}</p>    
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Terms & Conditions</label>
                            <textarea name="" id="" v-model="Uterms" class="form-control form-control-lg"></textarea>
                            <!-- <input v-model="terms" class="form-control form-control-lg mb-4" type="text" placeholder="Write text here.." aria-label=".form-control-lg example"> -->
                            <p  v-if="field_errors.terms" class="text-danger"> {{ field_errors.terms[0]}}</p>
                        </div>  
                    </div>
                </div>

                <div class="form-group ">
                    <label for="">Is Active?</label>
                    <div class="custom-control custom-switch mb-2" dir="ltr">
                        <input v-model="Ustatus" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                        <label class="custom-control-label" for="customSwitchActive"></label>
                    </div>
                </div>
                

              
        </MazDialog>

        <MazDialog v-model="openDeleteModalN" danger :width="500" title="Delete giftcard rate" @confirm="deleteThisRate()">
            Are you sure you want to delete this giftcard rate?
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
            cardType : "",
            amount : "",
            hasDialogOpenN : false,
            openDeleteModalN : false,
            giftcardRateId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Card Type', name: 'cardType', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Terms', name: 'terms', width: ""}, 
                { title: 'Is rate active?', name: 'status', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "giftcard/loading",
            giftcardRates : "giftcard/giftcardRates",
            giftcardRate : "giftcard/giftcardRate",
            giftcard : "giftcard/giftcardData",
        }),
        Uname:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.giftcard_name : null
                return null
            },
            set(value){
                let item = 'giftcard_name'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
        Uamount:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.card_amount_rate : null
                return null
            },
            set(value){
                let item = 'card_amount_rate'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
        UcardType:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.card_type : null
                return null
            },
            set(value){
                let item = 'card_type'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
        Ucurrency:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.currency : null
                return null
            },
            set(value){
                let item = 'currency'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
        Uterms:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.terms : null
                return null
            },
            set(value){
                let item = 'terms'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
        Ustatus:{
            get(){
                if(this.giftcardRate)
                    return  this.giftcardRate ? this.giftcardRate.status : 0
                return 0
            },
            set(value){
                let item = 'status'
                this.SET_GIFTCARD_RATE_DATA({item, value })
            }
        },
    },
    methods : {
        ...mapActions({
            getGiftcardsRate: "giftcard/getGiftcardsRate",
            updateGiftcardRate: "giftcard/updateGiftcardRate",
            deleteThisGiftcardRate: "giftcard/deleteThisGiftcardRate"
        }),
        ...mapMutations({
            SET_LOADING: "giftcard/SET_LOADING",
            SET_GIFTCARD_RATE_DATA: "giftcard/SET_GIFTCARD_RATE_DATA",
            SET_SINGLE_RATE: "giftcard/SET_SINGLE_RATE",
            SET_SAVING: "giftcard/SET_SAVING"
        }),
        async deleteThisRate(){
            try {
                let giftcard_rate_id = this.giftcardRateId
                await this.deleteThisGiftcardRate(giftcard_rate_id)
                 this.openDeleteModalN = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModalN = true
            this.giftcardRateId = value
        },
        editThisCard(giftcardRate){
            this.hasDialogOpenN = true
            this.SET_SINGLE_RATE(giftcardRate)
        },
        async updateGiftcardData(){
            
            try {
                let parameter = {
                    giftcard_id : this.giftcardRate ? this.giftcard.id : this.$route.query.giftcardId,
                    giftcard_name : this.Uname,
                    card_amount_rate : this.Uamount,
                    card_type : this.UcardType,
                    currency : this.Ucurrency,
                    status : this.Ustatus ? 1 : 0,
                    terms : this.Uterms
                }
                let giftcard_id = this.giftcard ? this.giftcardRate.id : ""
                await this.updateGiftcardRate({giftcard_id, parameter})
                this.SET_SINGLE_RATE(null)
                this.hasDialogOpenN = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
    },
    mounted(){
        // let giftcard_id = this.$route.query.giftcardId
        // this.getGiftcardsRate(giftcard_id)
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
    width: 100%;
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