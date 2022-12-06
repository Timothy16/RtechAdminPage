<template>
  <div>
    <Header />
    <div class="upper-page">
       <Crypto />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/NewOrders/Header.vue';
import Crypto from '@/components/NewOrders/Crypto.vue';
export default {
  components: { Header,  Crypto},
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
  padding: 10rem 20px 0 20px;
}
</style>
