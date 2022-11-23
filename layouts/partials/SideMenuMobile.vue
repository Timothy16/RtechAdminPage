<template>
  <div class="" v-if="isOpen">
    <div class="sidebar">
    <div class="logo-details">
      <span class="logo_name"><img src="/images/logo_one.png" alt="" srcset=""></span>
       <i class='bx bx-window-close display-v' @click="closeTab"></i>
    </div>
      <ul class="nav-links">
        <li @click="closeTab">
          <nuxt-link to="/dashboard" class=""  :class="{'active-h' : checkUrl == '/dashboard'}">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Overview</span>
          </nuxt-link>
        </li>
        <li @click="closeTab">
          <nuxt-link to="/dashboard/sell-giftcards" :class="{'active-h' : checkUrl == '/dashboard/sell-giftcards'}">
            <i class='bx bx-box' ></i>
            <span class="links_name">Sell Giftcards</span>
          </nuxt-link>
        </li>
        <li @click="closeTab">
           <nuxt-link to="/dashboard/sell-crypto" :class="{'active-h' : checkUrl == '/dashboard/sell-crypto'}">
            <i class='bx bx-list-ul' ></i>
            <span class="links_name">Sell Crypto</span>
           </nuxt-link>
        </li>
        <li @click="closeTab">
          <nuxt-link to="/dashboard/bank-details" :class="{'active-h' : checkUrl == '/dashboard/bank-details'}">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Bank Details</span>
          </nuxt-link>
        </li>
        <li @click="closeTab">
           <nuxt-link to="/dashboard/transaction-history" :class="{'active-h' : checkUrl == '/dashboard/transaction-history'}">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Transactions</span>
           </nuxt-link>
        </li>
        <li @click="closeTab">
          <nuxt-link to="/dashboard/profile" :class="{'active-h' : checkUrl == '/dashboard/profile'}">
            <i class='bx bx-user' ></i>
            <span class="links_name">Profile</span>
          </nuxt-link>
        </li>
        <li @click="closeTab">
          <nuxt-link to="/dashboard/help" :class="{'active-h' : checkUrl == '/dashboard/help'}">
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Help</span>
          </nuxt-link>
        </li>
        <!-- <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
          </a>
        </li> -->
        <!-- <li>
          <a href="#">
            <i class='bx bx-heart' ></i>
            <span class="links_name">Favrorites</span>
          </a>
        </li> -->
        <li @click="closeTab">
          <nuxt-link to="/dashboard/setting" :class="{'active-h' : checkUrl == '/dashboard/setting'}">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Setting</span>
          </nuxt-link>
        </li>
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  computed : {
    checkUrl(){
      return this.$route.path
    }
  },
  data(){
        return{
            isOpen : false
        }
    },

    methods : {
        closeTab(){
            this.isOpen = false
        }
    },
    mounted(){
        this.$root.$on("command", () => {
            this.isOpen = true  
        })
     }
}
</script>

<style  scoped>
a.nuxt-link-exact-active {
  /* color: #fff !important; */
}
.active-h{
  /* background: #081D45; */
  background: #fff;
  border-radius: 10px;
  color: #0C64E6 !important;
}
ul{
  padding-left: 0;
}
/* .display-v{
    display: none;
  }
@media screen and (max-width : 578px){
  .display-v{
    display: block;
  }
}
@media only screen and (min-width : 768px) and (max-width : 1024px){
  .display-v{
    display: block;
  }
} */
</style>