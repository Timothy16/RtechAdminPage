<template>
  <div>
    <Header />
    <div class="upper-page">
       <SingleGiftCard />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/NewOrders/Header.vue';
import SingleGiftCard from '@/components/NewOrders/SingleGiftCard.vue';
export default {
  components: { Header, SingleGiftCard },
   layout : "dashboard-layout",
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
  padding: 8rem 0 2rem 0 ;
}
</style>
