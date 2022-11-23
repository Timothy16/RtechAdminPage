<template>
  <div>
    <Header />
    <div class="upper-page">
       <Crypto />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Rate/Header.vue';
import Crypto from '@/components/Rate/Crypto.vue'
export default {
  components: { Header, Crypto },
   layout : "dashboard-layout",
    head() {
        return {
            title: "Crypto Rate / Rtechbiz",
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
