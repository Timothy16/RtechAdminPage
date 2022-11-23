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
import Report from '@/components/Report/ReportSection.vue'
export default {
  components: { Header, Report },
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
