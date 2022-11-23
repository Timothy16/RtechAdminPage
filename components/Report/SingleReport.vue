<template>
  <div class="bg-white bg-pad">
    <nuxt-link to="/new-orders/giftcard">
        <i class="fa fa-angle-left angle-edit"></i>
    </nuxt-link>
    <div class="mt-4">
        <div class="personal-info">Report Details</div>
        <div class="headers">Full Name</div>
        <div class="text-h">Depo Steven</div>

        <div class="headers">Email</div>
        <div class="text-h">user@rtech.com</div>

        <div class="headers">Report</div>
        <div class="text-h">I wasn't able to checkout on my page</div>

        <div class="headers">Image</div>
        <div class="text-h"><img src="/images/amazon.png" alt="" srcset=""></div>

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