<template>
  <div>
    <Header />
    <div class="upper-page">
       <Transaction />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Transaction/Header.vue';
import Transaction from '@/components/Transaction/Rejected.vue'
export default {
  components: { Header, Transaction },
   layout : "dashboard-layout",
    middleware: 'auth',
    head() {
        return {
            title: "Rejected Transaction / Rtechbiz",
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
