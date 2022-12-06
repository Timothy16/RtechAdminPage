<template>
  <div>
    <Header />
    <div class="upper-page">
       <BankSection />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Bank/Header.vue';
import BankSection from '@/components/Bank/BankSection.vue'
export default {
  components: { Header, BankSection },
   middleware: 'auth',
   layout : "dashboard-layout",
    head() {
        return {
            title: "Bank Detials / Rtechbiz",
        };
    },
  name: 'IndexPage'
}
</script>
<style scoped>
.upper-page{
  padding: 8rem 20px 0 20px;
}
</style>
