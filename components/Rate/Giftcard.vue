<template>
<client-only>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <div class="header-info">Set Giftcard Rates</div>
            <form action="" @submit.prevent>                         

                <input v-model="name" class="form-control form-control-lg mb-4" type="text" placeholder="Giftcard Name" aria-label=".form-control-lg example">
                <p  v-if="field_errors.name" class="text-danger"> {{ field_errors.name[0]}}</p>
                
                <select v-model="cardType" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                    <option value="" selected>Select Card Type</option>
                    <option value="Physical Card">Physical Card</option>
                    <option value="Virtual Card">Virtual Card</option>
                </select>

                <input v-model="amount" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
                <p  v-if="field_errors.amount" class="text-danger"> {{ field_errors.amount[0]}}</p>
                
                
                <button :disabled="loading" type="submit" @click="createNewRate" class="btn-sellgiftcards btn">{{loading ? 'Please wait...' :'Set Giftcard Rate'}}</button>

            </form>
       </div>
       <!-- Table -->
        <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="giftcards" class="bg-white mt-5 p-3">
            
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
                <span>{{ props.rowData.name }}</span>
            </div>

            <div slot="cardType" slot-scope="props">
                <span>{{ props.rowData.card_type }}</span>
            </div>

            <div slot="amount" slot-scope="props">
                <span>N {{ props.rowData.amount }}</span>
            </div>
        </vuetable>
        <MazDialog v-model="hasDialogOpen" :width="1000" title="Update Rate" @confirm="updateGiftcardData()">
                <input v-model="Uname" class="form-control form-control-lg mb-4" type="text" placeholder="Giftcard Name" aria-label=".form-control-lg example">
                <p  v-if="field_errors.name" class="text-danger"> {{ field_errors.name[0]}}</p>
                
                <select v-model="UcardType" class="form-select form-control form-select-lg mb-4" aria-label=".form-select-lg example">
                    <option value="" selected>Select Card Type</option>
                    <option value="Physical Card">Physical Card</option>
                    <option value="Virtual Card">Virtual Card</option>
                </select>

                <input v-model="Uamount" class="form-control form-control-lg mb-4" type="text" placeholder="Amount" aria-label=".form-control-lg example">
                <p  v-if="field_errors.amount" class="text-danger"> {{ field_errors.amount[0]}}</p>
        </MazDialog>

        <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete giftcard rate" @confirm="deleteThisRate()">
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
            hasDialogOpen : false,
            openDeleteModal : false,
            giftcardId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Name',frozen:true, name: 'name',width: "", editor: false}, 
                { title: 'Card Type', name: 'cardType', width: ""}, 
                { title: 'Amount', name: 'amount', width: ""}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "rate/loading",
            giftcards : "rate/giftcards",
            giftcard : "rate/giftcard",
        }),
        Uname:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.name : null
                return null
            },
            set(value){
                let item = 'name'
                this.SET_GIFTCARD_DATA({item, value })
            }
        },
        Uamount:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.amount : null
                return null
            },
            set(value){
                let item = 'amount'
                this.SET_GIFTCARD_DATA({item, value })
            }
        },
        UcardType:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.card_type : null
                return null
            },
            set(value){
                let item = 'card_type'
                this.SET_GIFTCARD_DATA({item, value })
            }
        },
    },
    methods : {
        ...mapActions({
            createGiftcardRate: "rate/createGiftcardRate",
            getGiftcardsRate: "rate/getGiftcardsRate",
            updateGiftcardRate: "rate/updateGiftcardRate",
            deleteGiftcardRate: "rate/deleteGiftcardRate"
        }),
        ...mapMutations({
            SET_LOADING: "rate/SET_LOADING",
            SET_GIFTCARD: "rate/SET_GIFTCARD",
            SET_GIFTCARD_DATA: "rate/SET_GIFTCARD_DATA",
            SET_SAVING: "rate/SET_SAVING"
        }),
        async deleteThisRate(){
            try {
                let giftcard_id = this.giftcardId
                await this.deleteGiftcardRate(giftcard_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModal = true
            this.giftcardId = value
        },
        editThisCard(giftcard){
            this.hasDialogOpen = true
            this.SET_GIFTCARD(giftcard)
        },
        async updateGiftcardData(){
            try {
                let parameter = {
                    name : this.Uname,
                    amount : this.Uamount,
                    card_type : this.UcardType
                }
                let giftcard_id = this.giftcard ? this.giftcard.id : ""
                await this.updateGiftcardRate({parameter, giftcard_id})
                this.SET_GIFTCARD(null)
                this.hasDialogOpen = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async createNewRate(){
            try {
                let data = {
                    name : this.name,
                    card_type : this.cardType,
                    amount : this.amount
                }
                await this.createGiftcardRate(data)
                // await this.getGiftcardsRate()
                this.name = ""
                this.cardType = ""
                this.amount = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        }
    },
    mounted(){
        this.getGiftcardsRate()
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