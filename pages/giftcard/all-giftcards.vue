<template>
  <div>
    <Header />
    <div class="upper-page">
       <AllGiftcards />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Giftcards/Header.vue';
import AllGiftcards from '@/components/Giftcards/AllGiftcards.vue'
export default {
  components: { Header, AllGiftcards },
   layout : "dashboard-layout",
    head() {
        return {
            title: "All Giftcards / Rtechbiz",
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
