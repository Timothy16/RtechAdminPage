<template>
  <div>
    <Header />
    <div class="upper-page">
       <SingleCrypto />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/NewOrders/Header.vue';
import SingleCrypto from '@/components/NewOrders/SingleCrypto.vue';
export default {
  components: { Header, SingleCrypto },
   layout : "dashboard-layout",
    middleware: 'auth',
    head() {
        return {
            title: "Crypto Order / Rtechbiz",
        };
    },
  name: 'IndexPage'
}
</script>
<style scoped>
.upper-page{
  padding: 8rem 0 2rem 0 ;
}
</style>
