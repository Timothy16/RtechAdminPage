<template>
    <div class="  mb-5">
        <!-- form to set rate -->
       <div class="bg-white bg-pad">
            <!-- <div class="header-info">Set Crypto Rate</div> -->
            <form action="" @submit.prevent class="form-width">                         
                <div>
                    <label for="">Title</label>
                    <input v-model="title" class="form-control form-control-lg mb-4" type="text" placeholder="Title" aria-label=".form-control-lg example">
                    <p  v-if="field_errors.title" class="text-danger"> {{ field_errors.title[0]}}</p>
                </div>

                 <div>
                    <label for="">Description</label>
                    <vue-editor v-model="description" :class="['form-control1',{'parsley-error': field_errors.description}]" class=""></vue-editor>
                    <!-- <textarea v-model="description" name="" class="form-control form-control-lg mb-4" id="" placeholder="Description"></textarea> -->
                    <p v-if="field_errors.description" class="text-danger"> {{ field_errors.description[0]}}</p>
                </div>

                <button type="submit" @click="createNewFaq" class="btn-sellgiftcards btn mt-3">{{loading ? "Please wait...." : 'Submit FAQ'}}</button>

            </form>
       </div>
       <!-- Table -->
        <vuetable ref="vuetable"
            :fields="options"
            :api-mode="false"
            :data="faqs" class="bg-white mt-5">
            <div slot="action" slot-scope="props">
                <div class="btn btn-secondary" @click="editThisFaq(props.rowData)">
                    Update    
                </div>
                <div class="btn btn-delete" @click="openDelete(props.rowData.id)">
                    Delete 
                </div>
            </div>
            <div slot="sn" slot-scope="props">
                    <span>{{ props.rowIndex + 1}}</span>
                  </div>
             <div slot="title" slot-scope="props">
                <span>{{ props.rowData.title }}</span>
            </div>

             <div slot="description" slot-scope="props">
                <span v-html="props.rowData.description"></span>
            </div>
        </vuetable>

        <MazDialog v-model="hasDialogOpen" :width="1000" title="Update FAQ" @confirm="updateFaqData()">
            <div>
                <label for="">Title</label>
                <input v-model="UTitle" class="form-control form-control-lg mb-4" type="text" placeholder="Title" aria-label=".form-control-lg example">
                <p  v-if="field_errors.title" class="text-danger"> {{ field_errors.title[0]}}</p>
            </div>

            <div>
                <label for="">Description</label>
                <vue-editor v-model="UDescription" :class="['form-control1',{'parsley-error': field_errors.description}]" class=""></vue-editor>
                <p v-if="field_errors.description" class="text-danger"> {{ field_errors.description[0]}}</p>
            </div> 
        </MazDialog>

        <MazDialog v-model="openDeleteModal" danger :width="500" title="Delete FAQ" @confirm="deleteThisFaq()">
            Are you sure you want to delete this Faq?
        </MazDialog>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            title : "",
            description : "",
            hasDialogOpen : false,
            openDeleteModal : false,
            faqId : "",
            options: [
                { title: 'SN', name: 'sn'}, 
                { title: 'Title',frozen:true, name: 'title',width: "400px", editor: false}, 
                { title: 'Description', name: 'description', width: "700px"}, 
                { title: 'Action', name: 'action' }, 
            ]
        }
    },
    computed: {
        ...mapGetters({
            loading : "faq/loading",
            faqs : "faq/faqs",
            singleFaq : "faq/singleFaq",
        }),
        UTitle:{
            get(){
                if(this.singleFaq)
                    return  this.singleFaq ? this.singleFaq.title : null
                return null
            },
            set(value){
                let item = 'title'
                this.SET_FAQ_DATA({item, value })
            }
        },
        UDescription:{
            get(){
                if(this.singleFaq)
                    return  this.singleFaq ? this.singleFaq.description : null
                return null
            },
            set(value){
                let item = 'description'
                this.SET_FAQ_DATA({item, value })
            }
        },
    },
    methods : {
        ...mapActions({
            addNewFaq: "faq/addNewFaq",
            getFaqs: "faq/getFaqs",
            updateThisFaq: "faq/updateThisFaq",
            deleteThisFaqData: "faq/deleteThisFaqData"
        }),
        ...mapMutations({
            SET_LOADING: "faq/SET_LOADING",
            SET_FAQ: "faq/SET_FAQ",
            SET_FAQ_DATA: "faq/SET_FAQ_DATA",
            SET_SAVING: "faq/SET_SAVING"
        }),
        async deleteThisFaq(){
            try {
                let faq_id = this.faqId
                await this.deleteThisFaqData(faq_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModal = true
            this.faqId = value
        },
        editThisFaq(faq){
            this.hasDialogOpen = true
            this.SET_FAQ(faq)
        },
        async updateFaqData(){
            try {
                let parameter = {
                    title : this.UTitle,
                    description : this.UDescription
                }
                let faq_id = this.singleFaq ? this.singleFaq.id : ""
                await this.updateThisFaq({parameter, faq_id})
                this.SET_FAQ(null)
                this.hasDialogOpen = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async createNewFaq(){
            // console.log("click")
            try {
                let data = {
                    title : this.title,
                    description : this.description
                }
                await this.addNewFaq(data)
                await this.getFaqs()
                this.title = ""
                this.description = ""
            } catch (error) {
                this.SET_LOADING(false)
            }
        }
    },
    mounted(){
        this.getFaqs()
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
.parsley-error{
    /* border: 1px solid #ff0000; */
}
.form-width{
     width: 70%;
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
    /* width: 50%; */
    height: 100px;
    /* background: rgba(12, 100, 230, 0.06); */
    border: 1px solid rgba(12, 100, 230, 0.7);
    border-radius: 10px;
    font-weight: 600;
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
    padding: .7rem;
    font-size: 16px;
    /* font-weight: 600; */
    border: none;
    outline: none;
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