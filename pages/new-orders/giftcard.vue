<template>
  <div>
    <Header />
    <div class="upper-page">
       <Giftcard />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/NewOrders/Header.vue';
import Giftcard from '@/components/NewOrders/Giftcard.vue'
export default {
  components: { Header, Giftcard },
   layout : "dashboard-layout",
    middleware: 'auth',
    head() {
        return {
            title: "Giftcard Order / Rtechbiz",
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
