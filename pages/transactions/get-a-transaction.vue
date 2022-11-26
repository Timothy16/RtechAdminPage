<template>
  <div>
    <Header />
    <div class="upper-page">
       <Transaction />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Transaction/Header2.vue';
import Transaction from '@/components/Transaction/SingleTransaction.vue'
export default {
  components: { Header, Transaction },
   layout : "dashboard-layout",
    head() {
        return {
            title: "All Transaction / Rtechbiz",
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
