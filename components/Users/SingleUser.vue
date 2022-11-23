<template>
  <div class="bg-white bg-pad">
    <nuxt-link to="/users">
        <i class="fa fa-angle-left angle-edit"></i>
    </nuxt-link>
    <MazAvatar :size="100" src="/images/thiago.jpg" class="mt-3"   bordered />
    <div class="mt-4">
        <div class="personal-info">Personal Information</div>
        <div class="headers">Full Name</div>
        <div class="text-h">Depo Steven</div>

        <div class="headers">Email</div>
        <div class="text-h">user@rtech.com</div>

        <div class="headers">Phone No</div>
        <div class="text-h">+234509248223</div>

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
            <div class="btn-active">Deactivate</div>
            <div class="btn-delete ml-3">Delete</div>
        </div>
        



    </div>
  </div>
</template>

<script>
export default {
   
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