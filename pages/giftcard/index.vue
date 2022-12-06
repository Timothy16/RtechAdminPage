<template>
  <div>
    <Header />
    <div class="upper-page">
       <Giftcard />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Giftcards/Header.vue';
import Giftcard from '@/components/Giftcards/Create.vue'
export default {
  components: { Header, Giftcard },
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
