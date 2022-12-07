<template>
    <div class=" bg-white mb-5">
        <!-- form to set rate -->
       <div class=" bg-pad">
            <!-- <div class="header-info">Create Giftcard</div> -->
            <form action="" @submit.prevent> 
                <div class="form-group">
                    <label for="">Select Giftcard</label>
                    <select v-model="giftcardId" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                        <option value="" selected>Select Giftcard</option>
                        <option :value="giftcard.id" v-for="(giftcard, index) in giftcards" :key="index">{{giftcard.giftcard_name}}</option>
                    </select>
                </div>                  
                <div class="form-group">
                    <label for="">Category Name</label>
                    <input v-model="giftcardCategory" class="form-control form-control-lg mb-4" type="text" placeholder="Category Name" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.giftcard_name" class="text-danger"> {{ field_errors.giftcard_name[0]}}</p>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Card Type</label>
                            <select v-model="cardType" class="form-select form-control-1 form-select-lg mb-4" aria-label=".form-select-lg example">
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
                            <input v-model="amount" class="form-control form-control-lg mb-4" type="text" placeholder="Card Rate" aria-label=".form-control-lg example">
                            <p  v-if="field_errors.card_amount_rate" class="text-danger"> {{ field_errors.card_amount_rate[0]}}</p>
                        </div>  
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="">Card Currency</label>
                            <select v-model="currency" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
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
                            <textarea name="" id="" v-model="terms" class="form-control form-control-lg"></textarea>
                            <!-- <input v-model="terms" class="form-control form-control-lg mb-4" type="text" placeholder="Write text here.." aria-label=".form-control-lg example"> -->
                            <p  v-if="field_errors.terms" class="text-danger"> {{ field_errors.terms[0]}}</p>
                        </div>  
                    </div>
                </div>

                <div class="form-group ">
                    <label for="">Is Active?</label>
                    <div class="custom-control custom-switch mb-2" dir="ltr">
                        <input v-model="status" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                        <label class="custom-control-label" for="customSwitchActive"></label>
                    </div>
                </div>
                

                <button type="submit" @click="setGiftcardCard" class="btn-sellgiftcards btn" :disabled="saving">{{saving ? 'Saving...' :'Set Giftcard Rate'}}</button>

            </form>
       </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import Loader from '../Loader.vue'
export default {
  components: { Loader },
   data(){
        return{
            giftcardId : "",
            giftcardCategory : "",
            terms : "",
            currency : "",
            cardType : "",
            status : 0,
            amount : ""
        }
    },
    computed: {
        ...mapGetters({
            saving : "giftcard/saving",
            giftcards : "giftcard/giftcards",
        })
    },
    methods : {
        ...mapActions({
            getAllGiftcards: "giftcard/getAllGiftcards",
            createGiftcardRate: "giftcard/createGiftcardRate",  
        }),
        ...mapMutations({
            SET_SAVING: "giftcard/SET_SAVING",
        }),  
        async setGiftcardCard(){
             try {
                let data = {
                    giftcard_id : this.giftcardId,
                    giftcard_name : this.giftcardCategory,
                    card_type : this.cardType,
                    card_amount_rate : this.amount,
                    currency : this.currency,
                    terms : this.terms,
                    status : this.status ? 1 : 0
                }
                
                await this.createGiftcardRate(data)
                
                this.giftcardCategory = ""
                this.amount = ""
                this.status = 0
                this.terms = ""
                this.currency = ""
                this.cardType = ""
                this.giftcardId = ""

            } catch (error) {
                this.SET_SAVING(false)
            }
        }
    },
    mounted(){
        this.getAllGiftcards()
    }
}
</script>

<style scoped>
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
        background: rgba(12, 100, 230, 0.06);
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
    .bg-pad{
        padding: 20px;
        width: 80%;
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
    height: 80px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    /* font-weight: 600; */
    font-size: 16px;
    line-height: 19px;
    color: #000000;
}
.form-control-1{
    box-sizing: border-box;
    width: 100%;
    height: 80px;
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
    padding: .4rem .6rem;
    font-size: 16px;
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