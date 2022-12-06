<template>
<div>
    <div v-if="giftcard && !loading">
        <div class="bg-white bg-pad">
            <div class="d-flex justify-content-between">
                <nuxt-link to="/giftcard/all-giftcards">
                    <i class="fa fa-angle-left angle-edit"></i>
                </nuxt-link>
                <div @click="openUpdateModal" class="btn btn-warning"><i class='bx bx-pencil' ></i> Update Giftcard</div>
            </div>
            
            <div class="mt-4">
                <!-- <div class="personal-info">Crypto Order</div> -->
                <div class="headers">Giftcard Name</div>
                <div class="text-h">{{giftcard.giftcard_name}}</div>

                <div class="headers">Card Image</div>
                <div class="text-h"><img src="/images/btc_img.png" alt="" srcset=""></div> 

                <div class="headers">Is Active?</div>
                <div class="text-h">{{parseInt(giftcard.status) ? "Yes" : "No"}}</div> 
            </div>
        </div>

        <table class="table mt-3 text-center table-responsive-lg table-lg bg-white">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Giftcard Name</th>
                    <th scope="col">Card Type</th>
                    <th scope="col">Rate</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Amazon [300-500]</td>
                    <td>Physical</td>
                    <td>N 2000</td>
                    <td>
                        <nuxt-link to="/new-orders/get-a-giftcard">
                            <div class="btn btn-secondary">
                                view 
                            </div>
                            <div class="btn btn-danger">
                                Delete 
                            </div>
                        </nuxt-link>
                    </td>
                </tr>       
                <tr>
                    <th scope="row">1</th>
                    <td>Amazon [300-500]</td>
                    <td>Physical</td>
                    <td>N 2000</td>
                    <td>
                        <nuxt-link to="/new-orders/get-a-giftcard">
                            <div class="btn btn-secondary">
                                view 
                            </div>
                            <div class="btn btn-danger">
                                Delete 
                            </div>
                        </nuxt-link>
                    </td>
                </tr>       
                <tr>
                    <th scope="row">1</th>
                    <td>Amazon [300-500]</td>
                    <td>Physical</td>
                    <td>N 2000</td>
                    <td>
                        <nuxt-link to="/new-orders/get-a-giftcard">
                            <div class="btn btn-secondary">
                                view 
                            </div>
                            <div class="btn btn-danger">
                                Delete 
                            </div>
                        </nuxt-link>
                    </td>
                </tr>       
                </tbody>
        </table>
    </div>
    <Loader v-else/>
    
    <MazDialog v-model="hasDialogOpen" :width="1000" title="Update giftcard" @confirm="updateGiftcardData()">
        <div class="form-group">
            <label for="">Giftcard Name</label>
                <input v-model="UgiftcardName" class="form-control form-control-lg mb-4" type="text" placeholder="" aria-label=".form-control-lg example">
                <p  v-if="field_errors.giftcard_name" class="text-danger"> {{ field_errors.giftcard_name[0]}}</p>
            </div>
            <ImageUpload/>
            <div class="form-group mt-3">
                <label for="">Is Active?</label>
                <div class="custom-control custom-switch mb-2" dir="ltr">
                    <input v-model="Ustatus" type="checkbox" class="custom-control-input form-control-lg" id="customSwitchActive">
                    <label class="custom-control-label" for="customSwitchActive"></label>
                </div>
                    
            </div>
        
    </MazDialog>

</div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
import ImageUpload from './ImageUpload.vue';
export default {
  components: { ImageUpload },
    data(){
        return {
            // giftcardName : "",
            // giftcardImg : "",
            // status : 0,
            // imgPreview : null,
            // showImage : false,
            // giftcardImg2 : "",
            hasDialogOpen : false
        }
    },
    computed: {
        ...mapGetters({
            loading : "giftcard/loading",
            giftcard : "giftcard/giftcardData",
        }),
         UgiftcardName:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.giftcard_name : null
                return null
            },
            set(value){
                let item = 'giftcard_name'
                this.SET_GIFTCARD_DATA({item, value })
            }
        },
        Ustatus:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.status : null
                return null
            },
            set(value){
                let item = 'status'
                this.SET_GIFTCARD_DATA({item, value })
            }
        },
        thumbnail:{
            get(){
                if(this.giftcard)
                    return  this.giftcard ? this.giftcard.giftcard_picture : null
                return null
            },
        },
    },
    methods : {
        ...mapActions({
            createNewGiftcard: "giftcard/createNewGiftcard",
            getGiftcard: "giftcard/getGiftcard",
            updateGiftcard : "giftcard/updateGiftcard"
        }),
        ...mapMutations({
            SET_LOADING: "giftcard/SET_LOADING",
            SET_SAVING: "giftcard/SET_SAVING",
            SET_GIFTCARD_DATA: "giftcard/SET_GIFTCARD_DATA",
        }),   
        async createGiftcard(){
            try {
                // let data = {
                //     giftcard_name : this.giftcardName,
                //     giftcard_picture : this.giftcardImg2,
                //     status : this.status ? 1 : 0
                // }
                let formData = new FormData();
                formData.append('giftcard_name', this.giftcardName)
                formData.append('giftcard_picture', this.giftcardImg2)
                formData.append('status', this.status ? 1 : 0)
                
                await this.createNewGiftcard(formData)
                
                this.giftcardName = ""
                this.giftcardImg = ""
                this.status = 0
                this.showImage = false
            } catch (error) {
                this.SET_LOADING(false)
            }
        },
        openUpdateModal(){
            this.hasDialogOpen = true
        },
        async updateGiftcardData(){ 
            try {
                let formData = new FormData();
                formData.append('giftcard_name', this.UgiftcardName)
                formData.append('giftcard_picture', this.thumbnail)
                formData.append('status', this.Ustatus ? 1 : 0)
                
                let giftcard_id =  this.giftcard ? this.giftcard.id : ""
                await this.updateGiftcard({giftcard_id, formData})
                this.getGiftcard(giftcard_id)
                // this.SET_GIFTCARD(null)
                this.hasDialogOpen = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
     
    },
    mounted(){
       let giftcard_id = this.$route.query.giftcardId
       this.getGiftcard(giftcard_id)
    }
}
</script>

<style scoped>
.bg-pad{
    padding: 2rem !important;
}
.angle-edit{
    font-size: 2rem;
}
.personal-info{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    margin-bottom: 2rem;
}
.headers{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    /* line-height: 28px; */
    color: #000000;
    margin-top: .4rem;
}
</style>