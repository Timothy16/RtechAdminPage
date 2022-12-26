<template>
  <div class="">
    <div class="sidebar">
    <div class="logo-details">
      <span class="logo_name"><img src="/images/logo_admin.png" alt="" srcset=""></span>
       <!-- <i class='bx bx-window-close display-v'></i> -->
    </div>
      <ul class="nav-links">
        <li class="mb-1">
          <nuxt-link to="/" class="" :class="{'active-h' : checkUrl == '/'}">
            <i class='bx bx-grid-alt' ></i>
            <span class="links_name">Overview</span>
          </nuxt-link>
        </li>
        <li class="mb-1">
          <nuxt-link to="/users" :class="{'active-h' : checkUrl == '/users'}">
            <i class='fa fa-users' ></i>
            <span class="links_name">Users</span>
          </nuxt-link>
        </li>
        <li class="mb-1">
           <nuxt-link to="/bank" :class="{'active-h' : checkUrl == '/bank-details'}">
            <i class='bx bx-dollar-circle'></i>
            <span class="links_name">Bank Details</span>
           </nuxt-link>
        </li>
        <li class="mb-1">
          <nuxt-link to="/new-orders/giftcard" :class="{'active-h' : checkUrl == '/new-orders/giftcard' || checkUrl == '/new-orders/crypto'}">
            <i class='bx bx-book-open'></i>
            <span class="links_name">New Orders</span>
          </nuxt-link>
        </li>
         <li class="mb-1">
          <nuxt-link to="/transactions" :class="{'active-h' : checkUrl == '/transactions' 
          || checkUrl == '/transactions/accepted' || checkUrl == '/transactions/completed' || checkUrl == '/transactions/rejected'}">
            <i class='bx bxs-wallet'></i>
            <span class="links_name">Transactions</span>
          </nuxt-link>
        </li>
        <li class="mb-1">
           <nuxt-link to="/giftcard" :class="{'active-h' : checkUrl == '/giftcard' || checkUrl == '/giftcard/all-giftcards'
           || checkUrl == '/giftcard/set-giftcard-rate'}">
            <i class='bx bxs-credit-card-alt' ></i>
            <span class="links_name">Giftcards</span>
           </nuxt-link>
        </li>
        <li class="mb-1">
           <nuxt-link to="/cryptocurrencies" :class="{'active-h' : checkUrl == '/cryptocurrencies' || checkUrl == '/cryptocurrencies'}">
            <i class='bx bx-bitcoin'></i>
            <span class="links_name">Cryptocurrencies</span>
           </nuxt-link>
        </li>
        <!-- <li class="mb-1">
           <nuxt-link to="/rate/giftcard" :class="{'active-h' : checkUrl == '/rate/giftcard' || checkUrl == '/rate/crypto'}">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Rate</span>
           </nuxt-link>
        </li> -->
        <li class="mb-1">
           <nuxt-link to="/faq" :class="{'active-h' : checkUrl == '/faq' || checkUrl == '/faq'}">
            <i class='bx bx-question-mark'></i>
            <span class="links_name">FAQs</span>
           </nuxt-link>
        </li>
        <li class="mb-1">
          <nuxt-link to="/reports" :class="{'active-h' : checkUrl == '/reports'}">
            <i class='bx bxs-report'></i>
            <span class="links_name">Complaints</span>
          </nuxt-link>
        </li>
        <li class="mb-1">
          <nuxt-link to="/newsletters" :class="{'active-h' : checkUrl == '/dashboard/help'}">
            <i class='bx bx-news' ></i>
            <span class="links_name">Newsletters</span>
          </nuxt-link>
        </li>
        <li class="mb-1">
          <nuxt-link to="/contact-us" :class="{'active-h' : checkUrl == '/dashboard/help'}">
            <i class='bx bx-message-check'></i>
            <span class="links_name">Contact Us</span>
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
        <!-- <li class="mb-1">
          <nuxt-link to="/dashboard/setting" :class="{'active-h' : checkUrl == '/dashboard/setting'}">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Setting</span>
          </nuxt-link>
        </li> -->
        <li class="log_out bg-log-out">
          
            <span  v-on:click="logout()">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
             </span>
         
        </li>
      </ul>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading :  false
    }
  },
  computed : {
    checkUrl(){
      return this.$route.path
    },
     redirectUrl(){
            return this.$route.fullPath
    },
  },
   methods : {
        logout() {
           this.loading = true
            this.$auth.logout();
        },
    },
}
</script>

<style  scoped>
.sidebar .nav-links li span{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.bg-log-out span{
  background: #FEE4E4;
  border-radius: 5px;
  width: 80% !important;
  color: #F56161 !important;
  cursor: pointer;
}
a.nuxt-link-exact-active {
  /* color: #fff !important; */
}
.active-h{
  /* background: #081D45; */
  background: #fff;
  border-radius: 5px;
  color: #0C64E6 !important;
}
ul{
  padding-left: 0;
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