<template>
  <div class="bg-white bg-pad">
    <nuxt-link to="/users">
        <i class="fa fa-angle-left angle-edit"></i>
    </nuxt-link>
   
    <div class="mt-4" v-if="registeredUser && !loading">
        <MazAvatar :size="100"  v-if="registeredUser.picture" :src="registeredUser.picture" class="mt-3"   bordered />
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
        </div>
        <div class="row">
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Is user active?</div>
                <div class="text-h">{{parseInt(registeredUser.status) ? 'Yes' : "No"}}</div>
            </div>
            <div class="col-sm-12 col-lg-3 col-md-6">
                <div class="headers">Date/Time Registered</div>
                <div class="text-h">{{$moment(registeredUser.created_at).format('lll')}}</div>
            </div>
        </div>
        

        <div class="personal-info mt-5">Bank Account Details</div>

        <div class="headers">Account Name</div>
        <div class="text-h">Depo Steven</div>

        <div class="row">
            <div class="col-lg-2">
                <div class="headers">Account No</div>
                <div class="text-h">0223893942</div>
            </div>

            <div class="col-lg-2">
                <div class="headers">Bank Name</div>
                <div class="text-h">Gtb</div>
            </div>
        </div>

        <div class="d-flex">
            <div class="btn-delete" v-if="parseInt(registeredUser.status)" @click="setActivity">{{saving ? 'Updating...' : 'Deactivate User'}}</div>
            <div class="btn-active" v-else @click="setActivity">{{saving ? 'Updating...' : 'Acivate User'}}</div>
            <!-- <div class="btn-delete ml-3">Delete</div> -->
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
            saving : "saving",
            registeredUser : "registeredUser",
        }),
    },
    methods : {
        ...mapActions({
            getUser: "getUser",  
            suspendUser : "suspendUser"
        }),
        ...mapMutations({
            SET_LOADING: "SET_LOADING",
            SET_SAVING: "SET_SAVING",
        }),
        async deleteThisUser(){
            try {
                let user_id = this.userId
                await this.deleteUserData(user_id)
                 this.openDeleteModal = false
            } catch (error) {
                this.SET_SAVING(false)
            }
        },
        openDelete(value){
            this.openDeleteModal = true
            this.userId = value
        },
        async setActivity(){
            try {
                let data = {
                    user_id : this.registeredUser.id
                }
                let user_id = this.$route.query.userId
                await this.suspendUser(data)
                await this.getUser(user_id)
            } catch (error) {
                this.SET_SAVING(false)
            }
        },

    },
    mounted(){
        let user_id = this.$route.query.userId
        this.getUser(user_id)
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