<template>
  <div>
    <Header />
    <div class="upper-page">
       <Crypto />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/FAQ/Header.vue';
import Crypto from '@/components/FAQ/Questions.vue'
export default {
  components: { Header, Crypto },
   layout : "dashboard-layout",
    head() {
        return {
            title: "FAQs / Rtechbiz",
        };
    },
  name: 'IndexPage'
}
</script>
<style scoped>
.upper-page{
  padding: 8rem 20px 2rem 20px;
}
</style>
