<template>
  <div>
    <Header />
    <div class="upper-page">
       <Newsletters />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Others/HeaderNews.vue';
import Newsletters from '@/components/Others/Newsletters.vue'
export default {
  components: { Header, Newsletters },
   middleware: 'auth',
   layout : "dashboard-layout",
    head() {
        return {
            title: "Contact Us / Rtechbiz",
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
