<template>
  <div class="bg-white bg-pad">
    <div v-if="order && !loading">
        <a @click="$router.back()">
            <i class="fa fa-angle-left angle-edit"></i>
        </a>
        <div class="mt-4">
            <div class="personal-info text-center">Giftcard Order #{{order.id}}  
                <span v-if="order.status === '1'" class="pending">{{ order.status === '1' ? 'Accepted' : ''}}</span>
                <span v-if="order.status === '2'" class="completed">{{ order.status === '2' ? 'Completed' : ''}}</span>
                <span v-if="order.status === '3'" class="rejected">{{ order.status === '3' ? 'Rejected' : ''}}</span>
            </div>
            <hr>
            <div class="personal-info">Giftcard Details </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Giftcard Name</div>
                    <div class="text-h">{{order.order.giftcard_rate ? order.order.giftcard_rate.giftcard.giftcard_name : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">Giftcard Category Name</div>
                    <div class="text-h">{{order.order.giftcard_rate ? order.order.giftcard_rate.giftcard_name : ""}}</div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Card Type</div>
                    <div class="text-h">{{order.order ? order.order.card_type : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">Amount</div>
                    <div class="text-h">{{order.order ? order.order.amount : ""}}</div>
                </div>
            </div>
            <div class="">
                <div class="headers">E-code</div>
                <div class="text-h" style="word-break : break all">{{order.order ? order.order.ecode : "?"}}</div>
            </div>

            <div class="headers">Transaction Image(s)</div>
            <MazGallery :images="imagesUrls" />
            <hr>
            <div class="personal-info">Orderd By : </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Full Name</div>
                    <div class="text-h">{{order.users ? order.users.name : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">user Name </div>
                    <div class="text-h">{{order.users ? order.users.username : ""}}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Email</div>
                    <div class="text-h">{{order.users ? order.users.email : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">Phone Number </div>
                    <div class="text-h">{{order.users ? order.users.phone : ""}}</div>
                </div>
            </div>

            <div class="headers">Profile Picture</div>
            <MazAvatar
                :src="order.users ? order.users.picture :'/images/avarter.jpg'"
                :size="120"
                editable
                class=""
                bordered
            />
            <hr>

            <div class="personal-info ">Bank Details : </div>
            <div class="row mb-3">
                <div class="col-lg-4">
                    <div class="headers">Account Name</div>
                    <div class="text-h">{{order.users.bank ? order.users.bank.account_name : "?"}}</div>
                </div>

                <div class="col-lg-4">
                    <div class="headers">Bank Name</div>
                    <div class="text-h">{{order.users.bank ? order.users.bank.bank_name : "?"}}</div>
                </div>
                <div class="col-lg-4">
                    <div class="headers">Account Number</div>
                    <div class="text-h">{{order.users.bank ? order.users.bank.account_number : "?"}}</div>
                </div>
            </div>
            <hr>
            <div class="headers ">Giftcard Rate Amount :</div>
            <div class="text-h">{{order.order.giftcard_rate ? order.order.giftcard_rate.currency : ""}}{{order.order.giftcard_rate ? order.order.giftcard_rate.card_amount_rate : "" | currency}}</div>

            <div class="headers">Amount(quantity users want to trade) :</div>
            <div class="text-h">{{order ? order.amount : ""}}</div>

            <div class="headers">Total(user get) :</div>
            <div class="text-h">{{order.order.giftcard_rate ? order.order.giftcard_rate.currency : ""}}{{total | currency}}</div>

            <div class="headers">Order response :</div>
            <div class="text-h">{{order ? order.response : "No response"}}</div>

           <div v-if="order.order_image != null">
                <div class="headers">Order response Image:</div>
                <MazGallery :images="[order.order_image]" />
            </div>
            
            <div v-if="order.order.order_image != null">
                <div class="headers">Order response Image:</div>
                <MazGallery :images="[order.order.order_image]" />
            </div>

            <div class="d-flex" v-if="order.status === '1'">
                <button class="btn-active" @click.prevent="openAccept()">{{saving ? 'Please wait...' : 'Complete Order'}}</button>
                <button class="btn-delete ml-3" @click.prevent="openReject()">Reject Order</button>
            </div>
        </div>
    </div>
    <div v-else>
        <Loader />
    </div>
    <MazDialog v-model="openAccModal" primary :width="500" title="Complete Trade" @confirm="acceptOrder()">
        Are you sure you want to complete this Trade?
        <div class="form-group">
            <label for="" class="mt-2"><strong>Message*</strong></label>
            <textarea name="" class="form-control" id="" cols="30" v-model="message" rows="5"></textarea>
            <p  v-if="field_errors.response" class="text-danger"> {{ field_errors.response[0]}}</p>
        </div>
        <div class="form-group mt-3">
            <label for="" class="ml-2"><strong>Upload Transaction Image : </strong> </label>
            <div class="trigger-layer">
                <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                <input :key="preview_list" type="file" accept="image/*"  @change="onFileChange($event)">
            </div>
        </div>

        <div class="prevew-edit mb-3" v-if="preview_list.length">
            <div>
                <label for="">image preview  <span class="btn btn-danger btn-sm" @click="removeImages()">remove image</span></label>
                <MazGallery :images="[preview_list]" height="300px"/>
            </div>
        </div>
    </MazDialog>
    <MazDialog v-model="openRejModal" danger :width="500" title="Reject Trade" @confirm="rejectOrder()">
        Are you sure you want to reject this Trade?
        <div class="form-group">
            <label for="" class="mt-2"><strong>Message*</strong></label>
            <textarea name="" class="form-control" id="" cols="30" v-model="message" rows="5"></textarea>
            <p  v-if="field_errors.response" class="text-danger"> {{ field_errors.response[0]}}</p>
        </div>

         <div class="form-group mt-3">
            <label for="" class="ml-2"><strong>Upload Transaction Image : </strong> </label>
            <div class="trigger-layer">
                <span><i class='fa fa-file-upload ml-5'></i> <br> Upload Image!</span>
                <input :key="preview_list" type="file" accept="image/*"  @change="onFileChange($event)">
            </div>
        </div>

        <div class="prevew-edit mb-3" v-if="preview_list.length">
            <div>
                <label for="">image preview  <span class="btn btn-danger btn-sm" @click="removeImages()">remove image</span></label>
                <MazGallery :images="[preview_list]" height="300px"/>
            </div>
        </div>

    </MazDialog>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return {
            openAccModal : false,
            openRejModal : false,
            message : "",
            preview_list: '',
            image_list: [],
            imageUpload : [],
        }
    },
    computed: {
        ...mapGetters({
            loading : "transactions/loading",
            order : "transactions/transaction",
            saving : "transactions/saving"
        }),
        total(){
            if(this.order.order){
                let total = this.order.order ? this.order.order.giftcard_rate.card_amount_rate * this.order.amount : ""
                return total ? total : ""
            }
            return ""
        },
        imagesUrls(){
            let imageUrl = []
            if(this.order){
                if(this.order.order)
                this.order.order.giftcard_image.forEach((image) => {
                    imageUrl.push(image.giftcard_image)
                })
                return imageUrl
            }
            return []
        },
    },
    methods : {
        ...mapActions({
            getSingleTransactions: "transactions/getSingleTransactions",
            compeleteRejectTransaction : "transactions/compeleteRejectTransaction"  
        }),
        ...mapMutations({
            SET_LOADING: "transactions/SET_LOADING",
            SET_SAVING : "transactions/SET_SAVING"
        }),
        removeImages(){
            this.preview_list = ''
        },
        onFileChange(e) {
            const file = e.target.files[0];
            this.imageUpload = e.target.files[0];
            this.preview_list = URL.createObjectURL(file);
        },
        // onFileChange(event) {
        //     var input = event.target;
        //     this.imageUpload = input.files
        //     var count = input.files.length;
        //     var index = 0;
        //     if (input.files) {
        //         while(count --) {
        //         var reader = new FileReader();
        //         reader.onload = (e) => {
        //             this.preview_list.push(e.target.result);
        //         }
        //         this.image_list.push(input.files[index]);
        //         reader.readAsDataURL(input.files[index]);
        //         index ++;
        //         }
        //     }
        // },
        openAccept(){
            this.openAccModal = true
        },
        openReject(){
            this.openRejModal = true
        },
        async acceptOrder(){
            
            try {
                // let parameter = {
                //    status : 2,
                //    response : this.message
                // }
                let formData = new FormData();
                formData.append('status', 2)
                formData.append('response', this.message)
                formData.append('order_image', this.imageUpload)
                // if(this.imageUpload.length > 0){
                //     for(var i=0 ; i < this.imageUpload.length; i++)
                //         {
                //             formData.append('order_image[' + i +']', this.imageUpload[i])
                //         }
                // }
                
                // else{
                //     formData.append('order_image', this.imageUpload)
                // }    

                let order_id = this.order ? this.order.id : ""
                await this.compeleteRejectTransaction({formData, order_id})
                this.openAccModal = false
                await this.getThisOrder()
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async rejectOrder(){
            
            try {
                // let parameter = {
                //    status : 3,
                //    response : this.message
                // }
                let formData = new FormData();
                formData.append('status', 3)
                formData.append('response', this.message)
                formData.append('order_image', this.imageUpload)

                let order_id = this.order ? this.order.id : ""
                await this.compeleteRejectTransaction({formData, order_id})
                this.openRejModal = false
                await this.getThisOrder()
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async getThisOrder(){
            let order_id = this.$route.query.orderId
            await this.getSingleTransactions(order_id)
        },
    },
    mounted(){
        let order_id = this.$route.query.orderId
        this.getSingleTransactions(order_id)
    }
}
</script>

<style scoped>
.trigger-layer {
        position: relative;
        /* width: 50%; */
        font-weight: 600;
        height: 50px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        margin: 5px;
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
    margin-bottom: .5rem;
}
.headers{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    /* line-height: 28px; */
    color: #000000;
    margin-top: .4rem;
}
.btn-active{
    padding: 20px;
    width: 200px;
    height: 59px;
    background: #B4EEAA;
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFA346;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
    outline: none;
}
.btn-delete{
    padding: 20px;
    width: 200px;
    height: 59px;
    background: #F8E2E2;
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #ff0000;
    margin-top: 2rem;
    cursor: pointer;
    border: none;
    outline: none;
}
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
a{
    cursor: pointer;
}
</style>