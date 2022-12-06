<template>
  <div>
    <Header />
    <div class="upper-page">
       <Report />
    </div>
   
  </div>
  
</template>

<script>
import Header from '@/components/Report/Header.vue';
import Report from '@/components/Report/SingleReport.vue'
export default {
  components: { Header, Report },
   middleware: 'auth',
   layout : "dashboard-layout",
    head() {
        return {
            title: "Users Reports/ Rtechbiz",
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
