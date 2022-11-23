<template>
    <div class="menu-edit" ref="navbar">
        <nav>
            <div class="bottom-navbar-nav shadow menu-spacing d-flex justify-content-between">
                <div class="bottom-nav-item">
                    <span class="bottom-nav-link-1">
                        <nuxt-link to="/"><img src="/images/logo_one.png"  alt="" srcset=""></nuxt-link>
                    </span>
                </div>
                <div class="bottom-nav-item">
                    <span class="bottom-nav-link-1">
                        <i class="fa fa-bars bars-edit" @click="openTab()"></i>
                    </span>
                </div>
            </div>
        </nav>

        <div class="mobile-slide">
            <div class="mobile-slide">
                <div class="sidenav" :class="[{'class-open' : displayTab}, {'class-close' : !displayTab}]">
                     <div class="">
                            <div class="">
                                <div class="col-sm-12 text-right closebtn" @click="closeTab">
                                    <i class="fa fa-times mt-2"></i> <span class="ml-2"></span> 
                                </div>
                                <div class="col-sm-12 links">
                                    <ul>
                                        <li class=""  @click="closeTab">
                                            <nuxt-link to="/about-us" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-utensils m-2"></i> -->
                                                <!-- <img src="/img/icons/cutlery.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>About Us</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        <li @click="closeTab" >
                                            <nuxt-link to="/contact-us" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-fw fa-handshake m-2"></i> -->
                                                  <!-- <img src="/img/icons/network.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>Contact Us</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        <li @click="closeTab" >
                                            <nuxt-link to="/rates" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-utensils m-2"></i> -->
                                                <!-- <img src="/img/icons/liveCam.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>Rates</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="#"  @click="closeTab" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-utensils m-2"></i> -->
                                                <!-- <img src="/img/icons/liveCam.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>Terms</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/login"  @click="closeTab" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-utensils m-2"></i> -->
                                                <!-- <img src="/img/icons/liveCam.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>Log In</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/signin"  @click="closeTab" class="d-flex justify-content-between">
                                                <!-- <i class="fas fa-utensils m-2"></i> -->
                                                <!-- <img src="/img/icons/liveCam.png" width="35px" height="35px" alt="" srcset=""> -->
                                                <span>Register</span> <span class="text-right"><i class="fa fa-angle-right"></i></span> 
                                            </nuxt-link>
                                        </li>
                                        
                                                                   
                                    </ul>
                                    <p class="mt-5 mb-0 text-center">&copy; Copyright {{new Date().getFullYear()}} <strong class="text-white text-center">Rtectbiz</strong>. <br> All Rights Reserved<br></p>
                                </div> 
                            </div>   
                        </div>
                </div>
            </div>
        </div>
  
    </div>
</template>

<script>
export default {
    name: "MobileMenu",
    data(){
        return {
                displayTab : false,
                    styleObject: {
                        width: "0px",
                    },
            }
    },
    computed : {
        fullWidth(){
            return {
                styleObject: {
                        width: "100%",
                    },
            }
        },
        checkUrl(){
            return this.$route.path
        },
         url(){
            return this.$config.DOMAIN_HOSTER
        }

    },
    methods :{
        openTab(){
            // this.fullWidth
            this.displayTab = true
            //  return this.styleObject.width = "100%";
            //   console.log("open-vue-tab", this.checkUrl)
        },
        closeTab(){
            this.displayTab = false
              this.styleObject.width = "0px";
            //   console.log("close-vue-tab",  this.displayTab)
        },
    },
};
</script>
<style  scoped>
.bars-edit{
    font-size: 2rem;
    padding: 1rem;
}
.class-open{
    width: 100%;
}
.class-close{
    width: 0px;
}
.h-height-1 {
    width: 100%;
    /* height: 80%; */
    margin-top: 5rem;
    /* padding: 0 3rem; */
}
.closebtn {
    font-size: 2rem !important;
    font-weight: 400;
    color: #fff;
}
a.nuxt-link-active{
    color: #FFA346;
    /* border-bottom: 2px solid #ff0000; */
}
a.nuxt-link-exact-active{
     color: #FFA346;
     text-decoration: none;
}
.m-style{
    /* font-family: "Roboto"; */
    text-transform: uppercase;
    font-weight: 400;
}
.border-white{
    width: 28px;
    border-radius: 22px;
    height: 5px;
    margin: auto;
    align-items: center;
    background: #fff;
}
.sidenav {
    /* text-align: center; */
    height: 100%;
    /* width: 0; */
    position: fixed;
    z-index: 9001;
    top: 0;
    left: 0;
    background-color: #0C64E6;
    color: #fff !important;
    /* box-shadow: 9px 19px 8px rgb(27 27 33 / 7%); */
    /* background-image: linear-gradient(to right, #0288d1, #0288d1 ); */
    /* opacity: 0.7; */
    overflow-x: hidden;
    transition: 0.5s;
    /* padding-top: 60px; */
}
.mobile-slide{
    display: none;
}
.news-left{
    margin-left : 1.7rem;
}
.menu-edit ul li{
    display: inline-block;
} 

.menu-edit{
    position: fixed;
    width: 100%;
    background: #fff;
    top: 0;
    left: 0;
    z-index: 9001;
    transition: all .3s;
}
.menu-edit2{
     /* background-image: linear-gradient(to right, rgba(0,0,0,0.3), rgba(0,0,0,0.3)); */
    background: #000;
    /* border: 1px solid rgba(0, 0, 0, .1);
    z-index: 9001;
    opacity: 0.7; */
    /* box-shadow: 0 0 10px #000; */
}
.menu-edit-1{
    position: fixed;
    /* z-index: 1001; */
    top : 0;
    /* box-shadow: 0 0 10px #000; */
    /* border: 1px solid rgba(0, 0, 0, .1); */
    /* background: #000; */
    /* opacity: 0.7; */
    width: 100%;
}
.col-dis a{
    color: #000 !important;
    border: none !important;
}

a{
    color: #fff;
}
.home-link{
    color: #000 !important;
     border-bottom: none !important;
}

.menu-spacing {
    /* word-spacing: 1rem; */
}
/* .icon-edit {
    color: #ff0000;
} */
.bottom-nav-link-1 {
    display: inline-block;
    font-size: 20px;
    font-weight: 600;
    overflow: hidden;
    padding: 16px 6px 12px 6px;
    text-align: center;
    vertical-align: bottom;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* color: #333333 !important; */
    /* width: 69px; */
}
.span-edit{
    display: flex;
    /* border: 1px solid #000; */
    padding: .1rem .5rem;
    border-radius: 25px;
}
.modal-overlay-1 {
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 2;
}
.modal-tab {
    position: fixed;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9001;
    width: 90%;
    height: 80%;
    /* max-width: 1200px; */
    background-color: #fff;
    border-radius: 10px;
    padding: 5px 5px 20px 5px;
    /* overflow: auto; */
}
.modal-tab ul li {
    text-decoration: none;
    list-style-type: none;
    padding-top: 3rem;
    display: block;
    /* text-align: center; */
}
.modal-tab ul {
    margin: 0;
    padding: 0;
}
.modal-tab .links{
    align-items: center;
    justify-content: center;
    display: flex;
}
.mobile-slide ul li {
    text-decoration: none;
    list-style-type: none;
    /* padding-top: 1rem; */
    padding-bottom: .3rem;
    display: block;
    border-bottom: 1px solid #fff;
   /* font-size: 1rem; */
}
.mobile-slide ul li span{
    margin-left: .5rem;
    font-size: 1rem;
    padding-top: 1.3rem;
}
.mobile-slide ul {
    margin: 0;
    padding: 0;
}
.mobile-slide .links{
    /* align-items: center;
    justify-content: center;
    display: flex; */

}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}
@media screen and (max-width: 320px) {
   
}
@media screen and (max-width: 578px) {
    .mobile-slide{
        display: block;
    }
}
@media screen and (max-width: 768px) {
    .mobile-slide{
        display: block;
    }
}
</style>