<template>
  <div>
    <Header />
    <div class="upper-page">
       <User />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Users/Header.vue';
import User from '@/components/Users/UserSection.vue'
export default {
  components: { Header, User },
   layout : "dashboard-layout",
    head() {
        return {
            title: "Users / Rtechbiz",
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
