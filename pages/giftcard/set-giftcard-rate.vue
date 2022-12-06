<template>
  <div>
    <Header />
    <div class="upper-page">
       <SetRate />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Giftcards/Header.vue';
import SetRate from '@/components/Giftcards/SetRate.vue'
export default {
  components: { Header, SetRate },
   middleware: 'auth',
   layout : "dashboard-layout",
    head() {
        return {
            title: "Set Giftcard Rate / Rtechbiz",
        };
    },
  name: 'IndexPage'
}
</script>
<style scoped>
.upper-page{
  padding: 10rem 0 2rem 0;
}
</style>
