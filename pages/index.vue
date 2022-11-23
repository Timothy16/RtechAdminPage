<template>
  <div>
    <Header />
    <div class="upper-page">
       <Overview/>
    </div>
   
  </div>
  
</template>

<script>
import Header from '../components/Overview/Header.vue';
import Overview from '../components/Overview/OverviewSection.vue'
export default {
  components: { Overview, Header },
   layout : "dashboard-layout",
    head() {
        return {
            title: "Overview / Rtechbiz",
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
