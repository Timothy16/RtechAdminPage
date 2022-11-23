<template>
  <div>
     <nav>
      <div class="sidebar-button">
        <i class='bx bx-menu sidebarBtn display-v' @click="openTab"></i>
        <span class="dashboard">Hi, Stephen</span>
      </div>
      <!-- <div class="search-box">
        <input type="text" placeholder="Search...">
        <i class='bx bx-search' ></i>
      </div> -->
      <div class="">
        <nuxt-link to="/dashboard/profile">
          <img src="/images/thiago.jpg" class="img-head" alt="">
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods : {
    openTab(){
       this.$root.$emit("command")
    }      
  }
}
</script>

<style scoped>
.img-head{
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.display-v{
  display: none;
}
@media screen and (max-width : 578px){
  .display-v{
    display: block;
  }
}
@media only screen and (min-width : 768px) and (max-width : 1240px){
  .display-v{
    display: block;
  }
}
</style>