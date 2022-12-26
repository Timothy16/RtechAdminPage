<template>
  <div class="bg-white bg-pad">
    <div v-if="order && !loading">
        <nuxt-link to="/new-orders/crypto">
            <i class="fa fa-angle-left angle-edit"></i>
        </nuxt-link>
        <div class="mt-4">
            <div class="personal-info text-center">Crypto Order #{{order.id}}  
                 <span v-if="order.status === null" class="pending">{{ order.status === null ? 'Pending' : ''}}</span>
            </div>
            <hr>
            <div class="personal-info">Crypto Details </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="headers">Crypto Category Name</div>
                    <div class="text-h">{{order.crypto_rate ? order.crypto_rate.crypto_name : ""}}</div>
                </div>
               <div class="col-lg-2">
                    <div class="headers">Amount</div>
                    <div class="text-h">{{order ? order.amount : ""}}</div>
                </div>
                <div class="col-lg-6">
                    <div class="headers">Crypto wallet</div>
                    <div class="text-h" style="word-break : break-all">{{order.crypto_rate ? order.crypto_rate.crypto_wallet : ""}}</div>
                </div>
            </div>

            <div class="headers">Transaction Image(s)</div>
            <MazGallery :images="imagesUrls" />
            <hr>
            <div class="personal-info">Orderd By : </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Full Name</div>
                    <div class="text-h">{{order.user ? order.user.name : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">User Name </div>
                    <div class="text-h">{{order.user ? order.user.username : ""}}</div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    <div class="headers">Email</div>
                    <div class="text-h">{{order.user ? order.user.email : ""}}</div>
                </div>

                <div class="col-lg-5">
                    <div class="headers">Phone Number </div>
                    <div class="text-h">{{order.user ? order.user.phone : ""}}</div>
                </div>
            </div>

            <div class="headers">Profile Picture</div>
            <MazAvatar
                :src="order.user ? order.user.picture :'/images/avarter.jpg'"
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
                    <div class="text-h">{{order.user.bank ? order.user.bank.account_name : "?"}}</div>
                </div>

                <div class="col-lg-4">
                    <div class="headers">Bank Name</div>
                    <div class="text-h">{{order.user.bank ? order.user.bank.bank_name : "?"}}</div>
                </div>
                <div class="col-lg-4">
                    <div class="headers">Account Number</div>
                    <div class="text-h">{{order.user.bank ? order.user.bank.account_number : "?"}}</div>
                </div>
            </div>
            <hr>
            <div class="headers ">Crypto Rate Amount :</div>
            <div class="text-h">N {{order.crypto_rate ? order.crypto_rate.crypto_amount : "" | currency}}</div>

            <div class="headers">Amount(quantity user want to trade) :</div>
            <div class="text-h">{{order ? order.amount : ""}}</div>

            <div class="headers">Total(user get) :</div>
            <div class="text-h">N {{total | currency}}</div>

             <div class="headers">Order response :</div>
            <div class="text-h">{{order ? order.response : "No response"}}</div>

            <div class="d-flex">
                <button class="btn-active" @click.prevent="openAccept()">{{saving ? 'Accepting Order...' : 'Accept Order'}}</button>
                <button class="btn-delete ml-3" @click.prevent="openReject()">Reject Order</button>
            </div>
        </div>
    </div>
    <div v-else>
        <Loader />
    </div>
    <MazDialog v-model="openAccModal" primary :width="500" title="Accept Trade" @confirm="acceptOrder()">
      Are you sure you want to accept this Trade?
    </MazDialog>
    <MazDialog v-model="openRejModal" danger :width="500" title="Reject Trade" @confirm="rejectOrder()">
      Are you sure you want to reject this Trade?
      <div class="form-group">
        <label for="" class="mt-2"><strong>Message*</strong></label>
        <textarea name="" class="form-control" id="" cols="30" v-model="message" rows="5"></textarea>
        <p  v-if="field_errors.response" class="text-danger"> {{ field_errors.response[0]}}</p>
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
            message : ""
        }
    },
    computed: {
        ...mapGetters({
            loading : "orders/loading",
            order : "orders/cryptoOrder",
            saving : "orders/saving"
        }),
        total(){
            if(this.order){
                let total = this.order.crypto_rate.crypto_amount * this.order.amount
                return total ? total : ""
            }
            return ""
        },
        imagesUrls(){
            let imageUrl = []
            if(this.order){
                this.order.crypto_image.forEach((image) => {
                    imageUrl.push(image.crypto_image)
                })
                return imageUrl
            }
            return null
        },
    },
    methods : {
        ...mapActions({
            getCryptoOrder: "orders/getCryptoOrder", 
            acceptRejectCryptoOrder : "orders/acceptRejectCryptoOrder"
            
        }),
        ...mapMutations({
            SET_LOADING: "orders/SET_LOADING",
            SET_SAVING : "orders/SET_SAVING"
        }),
        openAccept(){
            this.openAccModal = true
        },
        openReject(){
            this.openRejModal = true
        },
        async acceptOrder(){
            
            try {
                let parameter = {
                   id : this.order.id,
                   status : 1,
                   response : "Order Accepted"
                }

                await this.acceptRejectCryptoOrder(parameter)
                this.openAccModal = false
                this.$router.push('/transactions')
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        async rejectOrder(){
            
            try {
                let parameter = {
                   id : this.order.id,
                   status : 3,
                   response : this.message
                }

                await this.acceptRejectCryptoOrder(parameter)
                this.openRejModal = false
                this.$router.push('/transactions')
            } catch (error) {
                this.SET_SAVING(false)
            }
        },

    },
    mounted(){
        let order_id = this.$route.query.cryptoOrderId
        this.getCryptoOrder(order_id)
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
.pending{
  background: rgba(255, 165, 0, 0.2);
  border-radius: 40px;
  color: #FFA346;
  padding: .5rem .7rem;
  font-size: 14px;
}
</style>