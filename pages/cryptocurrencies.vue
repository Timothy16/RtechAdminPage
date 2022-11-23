<template>
  <div>
    <Header />
    <div class="upper-page">
       <Crypto />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Cryptocurrency/Header.vue';
import Crypto from '@/components/Cryptocurrency/Crypto.vue'
export default {
  components: { Header, Crypto },
   layout : "dashboard-layout",
    head() {
        return {
            title: "Cryptocurencies / Rtechbiz",
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
