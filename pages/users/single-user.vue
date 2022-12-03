<template>
  <div>
    <Header />
    <div class="upper-page">
       <SingleUser />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Users/Header.vue';
import SingleUser from '@/components/Users/SingleUser.vue'
export default {
  components: { Header, SingleUser },
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
  padding: 8rem 0 2rem 0 ;
}
</style>
