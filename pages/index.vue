<template>
  <div>

    <Header class="desktop-view"/>
    <div class="upper-page desktop-view">
       <Overview/>
    </div>
    <div class="mobile-v">
      <AdminMobile />
    </div>

   
  </div>
  
</template>

<script>
import AdminMobile from '../components/AdminMobile.vue';
import Header from '../components/Overview/Header.vue';
import Overview from '../components/Overview/OverviewSection.vue'
export default {
  components: { Overview, Header, AdminMobile },
   middleware: 'auth',
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
.mobile-v{
  display: none;
}
@media screen and (max-width : 578px){
   .mobile-v{
    display: block;
  }
  .desktop-view{
    display: none;
  }
   
}
</style>
