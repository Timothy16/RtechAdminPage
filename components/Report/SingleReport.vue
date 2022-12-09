<template>
  <div class="bg-white bg-pad">
    <nuxt-link to="/reports">
        <i class="fa fa-angle-left angle-edit"></i>
    </nuxt-link>
    <div class="mt-4" v-if="singleReport && !loading">
        <div class="personal-info">Report Details</div>
        <div class="headers">Full Name</div>
        <div class="text-h">{{singleReport.users.name}}</div>

        <div class="headers">Email</div>
        <div class="text-h">{{singleReport.users.email}}</div>

        <div class="headers">Phone</div>
        <div class="text-h">{{singleReport.users.phone}}</div>

        <div class="headers">Username</div>
        <div class="text-h">{{singleReport.users.username}}</div>

        <div class="headers">Report</div>
        <div class="text-h">{{singleReport.complaint}}</div>

        <div class="headers">Image</div>
        <MazGallery v-if="singleReport.image" :images="[singleReport.image]" height="300px"/>
        <!-- <div class="text-h" v-if="singleReport.image"><img :src="singleReport.image" alt="" srcset=""></div> -->
        <div class="text-h" v-else>No image</div>
    </div>
    <Loader v-else/>
  </div>
</template>

<script>
import {mapMutations, mapGetters, mapActions} from 'vuex'
export default {
    computed: {
        ...mapGetters({
            loading : "report/loading",
            singleReport : "report/singleReport",
        }),
    },
    methods : {
        ...mapActions({
            getReport: "report/getReport",  
        }),
        ...mapMutations({
            SET_LOADING: "report/SET_LOADING",
        }),
    },
    mounted(){
        let report_id = this.$route.query.reportId
        this.getReport(report_id)
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
    background: #B4EEAA;
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