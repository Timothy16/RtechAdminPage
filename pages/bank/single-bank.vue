<template>
  <div>
    <Header />
    <div class="upper-page">
       <Bank />
    </div>
   
  </div>
</template>

<script>
import Header from '@/components/Bank/Header.vue';
import Bank from '@/components/Bank/BankUser.vue'
export default {
  components: { Header, Bank },
   middleware: 'auth',
   layout : "dashboard-layout",
    head() {
        return {
            title: "Users Details / Rtechbiz",
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
