<template>
  <div class="bg-white bg-pad">
    <nuxt-link to="/bank">
        <i class="fa fa-angle-left angle-edit"></i>
    </nuxt-link>
   
    <div class="mt-4" v-if="bank && !loading">
        <!-- <MazAvatar :size="100"  v-if="registeredUser.picture" :src="registeredUser.picture" class="mt-3"   bordered />
        <MazAvatar :size="100" v-else src="/images/avarter.jpg" class="mt-3"   bordered />
        <div class="personal-info">Personal Information</div>
        <div class="row">
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Full Name</div>
                <div class="text-h">{{registeredUser.name}}</div>
            </div>
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Email</div>
                <div class="text-h">{{registeredUser.email}}</div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Username</div>
                <div class="text-h">{{registeredUser.username}}</div>
            </div>
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Phone No</div>
                <div class="text-h">{{registeredUser.phone}}</div>
            </div>
        </div> -->
        
        <div class="personal-info mt-5">Bank Account Details</div>

        <div class="headers">Account Name</div>
        <div class="text-h">{{bank.account_name}}</div>

        <div class="row">
            <div class="col-lg-2">
                <div class="headers">Account No</div>
                <div class="text-h">{{bank.account_number}}</div>
            </div>

            <div class="col-lg-2">
                <div class="headers">Bank Name</div>
                <div class="text-h">{{bank.bank_name}}</div>
            </div>
        </div>

        
    </div>
    <Loader v-else/>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            loading : "loading",
            bank : "bank",
        }),
    },
    methods : {
        ...mapActions({
            getBankDetail: "getBankDetail",  
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
        }),
    },
    mounted(){
        let bank_id = this.$route.query.bankId
        this.getBankDetail(bank_id)
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
    font-weight: 500;
    font-size: 16px;
    /* line-height: 19px; */
    color: rgba(0, 0, 0, 0.7);
    margin-top: 1.3rem;
}
.text-h{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    /* line-height: 28px; */
    color: #000000;
    margin-top: .4rem;
}
.btn-active{
    padding: 20px;
    width: 200px;
    height: 59px;
    background: rgba(255, 165, 0, 0.3);
    border-radius: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    text-align: center;
    color: #FFA346;
    margin-top: 2rem;
    cursor: pointer;
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
}
</style>