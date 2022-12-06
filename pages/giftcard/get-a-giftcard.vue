<template>
  <div>
    <Header />
    <div class="upper-page">
       <SingleGiftCard/>
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Giftcards/Header2.vue';
import SingleGiftCard from '@/components/Giftcards/SingleGiftcard.vue';
export default {
  components: { Header, SingleGiftCard },
   layout : "dashboard-layout",
    middleware: 'auth',
    head() {
        return {
            title: "Create Giftcard / Rtechbiz",
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
