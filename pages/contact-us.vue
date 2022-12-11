<template>
  <div>
    <Header />
    <div class="upper-page">
       <ContactUs />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Others/HeaderContact.vue';
import ContactUs from '@/components/Others/ContactUs.vue'
export default {
  components: { Header, ContactUs },
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
